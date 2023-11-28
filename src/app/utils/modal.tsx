import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface Modal {
  title: string;
  children: React.ReactNode;
  message: string;
  isDanger: boolean;
  callBack: (accept: boolean) => void;
  startContent: React.ReactNode;
}

export const ModalButton: React.FC<Modal> = ({
  children,
  title,
  message,
  isDanger,
  startContent,
  callBack,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onClickModal = (e: any) => {
    if (e) {
      callBack(e);
    }
    onOpenChange();
  };

  return (
    <>
      <Button
        size="sm"
        radius="none"
        variant="bordered"
        className="flex gap-0"
        color={isDanger ? "danger" : "primary"}
        onPress={onOpen}
        startContent={startContent}
      >
        {children}
      </Button>
      <Modal
        radius="none"
        isOpen={isOpen}
        onOpenChange={onClickModal}
        placement="top-center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col font-bold text-master-900/70 gap-1">
                {title}
              </ModalHeader>
              <ModalBody>{message}</ModalBody>
              <ModalFooter>
                <Button
                  radius="none"
                  size="sm"
                  color="danger"
                  variant="flat"
                  onPress={() => onClickModal(false)}
                >
                  Cancelar
                </Button>
                <Button
                  radius="none"
                  size="sm"
                  color="primary"
                  onPress={() => onClickModal(true)}
                >
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
