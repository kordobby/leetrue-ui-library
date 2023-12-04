import { useCallback, useState } from "react";

export type ModalContextType = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export function useModal(): ModalContextType {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, onOpen, onClose };
}
