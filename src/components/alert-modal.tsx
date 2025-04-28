import { Modal } from "antd";
import { useState } from "react";

const AlertModal = (message: string) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Modal
      title="알림"
      open={isOpen}
      onOk={() => {
        setIsOpen(false);
      }}
      onCancel={() => {
        setIsOpen(false);
      }}
    >
      {message}
    </Modal>
  );
};

export default AlertModal;
