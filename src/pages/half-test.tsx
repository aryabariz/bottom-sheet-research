import React from "react";
import { BottomsheetHalf } from "../components/bottomsheet-half";

export const HalfTest = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>Click Me</div>
      <BottomsheetHalf active={open} close={() => setOpen(false)}>
        <div className="px-4">
          <input placeholder="text input" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo lacus id erat porta porttitor. Morbi iaculis elementum
            sapien, id iaculis augue vulputate a. Integer et lectus eu massa
            aliquam ultrices. In hac habitasse platea dictumst. In magna leo,
            rhoncus ut nisl a, lacinia convallis lorem. Mauris et tristique leo,
            quis semper enim. Aenean nec tortor eget ipsum tristique vehicula et
            et neque. Suspendisse augue orci, ullamcorper vel ligula eget,
            semper consectetur quam. Morbi vehicula, urna eu tempor egestas,
            arcu dolor pharetra dui, at mattis nunc eros ac enim. Maecenas id
            maximus nunc. Donec bibendum mattis tellus, ullamcorper dignissim
            quam tempor quis. Curabitur pellentesque sed dolor eget fringilla.
            Sed rhoncus sodales vulputate. Donec semper ligula ac ultricies
            tincidunt. In hac habitasse platea dictumst. Duis sed est risus.
            Duis tempor elit ut sodales finibus. Aliquam tempor id est at
            tempus. Pellentesque et consequat lorem, id dictum orci. In nisl
            nibh, convallis quis cursus quis, gravida vitae leo. Cras porta
            molestie finibus. Aliquam vitae hendrerit augue, mattis vestibulum
            metus. Aliquam erat volutpat. Morbi blandit mi neque, semper aliquam
            ex tincidunt ut. Maecenas metus est, consequat eget elit non, rutrum
            semper tortor. Vestibulum porta nisl et sem congue, vel aliquet
            mauris imperdiet. In neque sem, pharetra vehicula dui a, pulvinar
            fermentum mauris. Nullam posuere nisl vel felis cursus, et semper mi
            convallis. Donec blandit felis in ligula facilisis fermentum. Ut ut
            vehicula felis. Ut non luctus augue. Aenean interdum nibh vel nulla
            sagittis, at congue purus lacinia. Nulla lectus sapien, fermentum ac
            ex sit amet, tempus facilisis eros. Ut semper turpis ut est
            vulputate, sollicitudin dictum neque finibus. Mauris pretium porta
            lorem, dignissim dapibus ligula. Proin non lorem venenatis, molestie
            velit a, facilisis neque. Maecenas et metus nisi. Phasellus blandit
            eros non elementum tempus. Quisque tincidunt libero felis, non
            pellentesque dui tristique ac. Aenean vestibulum elementum
            tincidunt. Sed semper, elit id sagittis tristique, nisl justo tempor
            tortor, ac porttitor felis neque mollis augue. Nunc pulvinar, arcu
            sit amet finibus interdum, lectus nulla consectetur risus, in
            faucibus nibh leo sit amet turpis. Nam commodo ante mi, vulputate
            egestas dolor volutpat a. Duis congue consectetur pulvinar. Donec eu
            tellus ullamcorper, fringilla ligula ut, rhoncus magna. Nulla vitae
            sem condimentum, suscipit erat sed, placerat enim. Phasellus
            scelerisque est nec nisi suscipit porttitor. Nulla interdum felis in
            risus tempor porta. Etiam sed lectus arcu. Nullam semper lorem
            augue, in maximus arcu rutrum et. Quisque at eros dui. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Integer luctus
            lobortis aliquam. Vivamus pretium risus mi, scelerisque vehicula
            velit ultrices id. Phasellus vel ex orci. Mauris eget semper orci.
            Donec elementum commodo turpis nec aliquam. Nunc suscipit dolor
            massa, fermentum tempus eros vestibulum at. Donec pharetra mi non
            est volutpat, ac viverra ex convallis. Sed mollis sapien sed ex
            pellentesque porta. Aenean posuere, erat imperdiet vulputate
            elementum, urna felis rutrum eros, vel ultricies ligula mauris non
            ex. Cras ut orci at magna tincidunt dictum et at velit. Ut velit
            magna, blandit ut efficitur ac, condimentum quis turpis. Vestibulum
            eu nisi vulputate enim aliquet vulputate eget sit amet sem. Donec
            vel ex sit amet velit viverra efficitur ut non diam. Mauris sed
            eleifend justo. Aliquam hendrerit, lacus nec commodo commodo, nulla
            dui finibus est, eget commodo arcu velit nec tortor. Aliquam vel
            ipsum vel sem mollis sodales. Donec imperdiet ut sapien vitae
            efficitur. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Sed sed mauris et sapien
            blandit imperdiet. Vivamus ut nisl lacinia, ornare nunc eget,
            efficitur ipsum.
          </div>
        </div>
        <div className="h-10 w-full bg-persimmon sticky bottom-0 flex items-center justify-center text-white">
          Click Me
        </div>
      </BottomsheetHalf>
    </>
  );
};

export default HalfTest;
