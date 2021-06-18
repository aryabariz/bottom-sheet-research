import React, { useEffect, useState } from "react";
import { Overlay } from "./overlay";
import { a, useTransition, useSpring, config } from "react-spring";
import { useDrag } from "react-use-gesture";

export const BottomsheetFull = (props: {
  active: boolean;
  close: () => void;
  children: React.ReactNode;
}) => {
  const Content = () => {
    let heightScreen = 0;
    if (typeof window !== "undefined") {
      heightScreen = window.innerHeight;
    }

    const [sheetHeight, setSheetHeight] = useState("60vh");
    const [{ y }, set] = useSpring(() => ({ y: 0 }));

    const open = (canceled: boolean) => {
      set({
        y: 0,
        immediate: false,
        config: canceled ? config.wobbly : config.stiff,
      });
    };

    const close = (velocity = 0) => {
      set({
        y: heightScreen,
        immediate: false,
        config: { ...config.stiff, velocity },
      });
      const timeout = setTimeout(() => {
        props.close && props.close();
      }, 300);

      return () => clearTimeout(timeout);
    };

    const bind = useDrag(
      ({ last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
        if (my < 0 ) cancel();

        if (last) {
          vy > 0.5 || my > ((heightScreen * 60) / 100) * 0.5
            ? close(vy)
            : open(canceled);
        } else set({ y: my, immediate: true });
      },
      {
        initial: () => [0, y.get()],
        filterTaps: true,
        rubberband: true,
      }
    );

    const transition = useTransition(props.active, {
      from: { transform: "translate3d(0px, 100%, 0px)" },
      enter: { transform: "translate3d(0px, 0%, 0px)" },
      leave: { transform: "translate3d(0px, 100%, 0px)" },
      trail: 200,
    });

    useEffect(() => {
      props.active
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }, [props.active]);

    return transition(
      (style, item) =>
        item && (
          <a.div style={{ ...style }} className="fixed h-full w-full bottom-0">
            <a.div
              style={{ y, touchAction: "none" }}
              onMouseDown={(e: any) => e.stopPropagation()}
              className="h-full flex flex-col justify-between"
            >
              <div
                className="w-full h-full bg-transparent"
                onClick={() => {
                  close();
                }}
              />
              <div className="bg-white w-full relative rounded-tr-2xl rounded-tl-2xl">
                <div
                  className="absolute top-0 h-10 bg-white w-full flex items-center justify-center rounded-tr-2xl rounded-tl-2xl"
                  {...bind()}
                  style={{ touchAction: "none" }}
                >
                  <div className="h-2 rounded-full w-20 bg-nobel" />
                </div>
                <div
                  className="overflow-y-scroll overflow-x-hide relative mt-10"
                  style={{ touchAction: "pan-y", maxHeight: "90vh" }}
                >
                  <div>{props.children}</div>
                </div>
              </div>
            </a.div>
          </a.div>
        )
    );
  };
  return (
    <>
      {props.active && <Overlay />}
      <Content />
    </>
  );
};
