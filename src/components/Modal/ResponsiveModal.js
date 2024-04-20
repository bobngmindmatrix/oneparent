import { SwipeableDrawer } from "@mui/material";
import { useIsMobile } from "@/hooks/common";
import { MdClose } from "react-icons/md";
import Modal from "@/components/Modal/Modal";
import { Button, Divider } from "@/components";

const ResponsiveModal = ({
  children,
  title = "Modal",
  open,
  onClose,
  withHeader = true,
}) => {
  const isMobile = useIsMobile();

  const renderHeader = () => {
    if (withHeader) {
      if (isMobile) {
        return (
          <div
            className={"flex w-full items-center justify-center relative p-4"}
          >
            <Button onClick={onClose} transparent className={"absolute left-4"}>
              <MdClose color={"#B7BECB"} />
            </Button>
            <div className={"font-medium"}>{title}</div>
          </div>
        );
      } else {
        return (
          <div className={"flex w-full items-center justify-between px-6 py-4"}>
            <div className={"font-medium"}>{title}</div>
            <Button onClick={onClose} transparent>
              <MdClose color={"#B7BECB"} />
            </Button>
          </div>
        );
      }
    }
    return null;
  };

  if (isMobile) {
    return (
      <SwipeableDrawer open={open} onClose={onClose} anchor={"bottom"}>
        <div className={"flex flex-col h-screen w-screen"}>
          {renderHeader()}
          <div className={"p-4"}>{children}</div>
        </div>
      </SwipeableDrawer>
    );
  } else {
    return (
      <Modal open={open} onClose={onClose}>
        <div className={"w-[500px]"}>
          {renderHeader()}
          <Divider />
          <div className={"p-6"}>{children}</div>
        </div>
      </Modal>
    );
  }
};

export default ResponsiveModal;
