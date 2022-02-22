import { useState } from "react";

export const useDialog = () => {
  const [isShow, setIsShow] = useState(false);
  const toggleDialog = () => {
    setIsShow(!isShow);
  };

  const Dialog = ({ children }: { children: React.ReactNode }) => {
    return (
      <dialog open={isShow}>
        <article>{children}</article>
      </dialog>
    );
  };

  return { Dialog, toggleDialog };
};
