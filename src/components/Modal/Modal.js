import { Modal as CustomModal } from "@mui/material";
const Modal = ({ open, onClose, children, className }) => {
  return (
    <div>
      <CustomModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`${className} bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-lg`}
        >
          {children}
        </div>
      </CustomModal>
    </div>
  );
};

export default Modal;
