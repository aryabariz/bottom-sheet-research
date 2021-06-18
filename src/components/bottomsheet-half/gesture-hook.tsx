import { useDrag } from "react-use-gesture";

export default function GestureBind() {
  const bind = useDrag(({ active, last, movement: [, my] }) => {

  });
  return { bind };
}
