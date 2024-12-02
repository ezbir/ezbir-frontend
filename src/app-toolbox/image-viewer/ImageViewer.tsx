"use client"
import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react"
import { Image } from "@nextui-org/react"

const ImageViewer = ({ src, alt }: { src: string; alt: string }) => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

    return (
        <>
            <Image
                src={src}
                alt={alt}
                onClick={onOpen}
                style={{ cursor: "pointer" }}
                className="size-96 object-cover rounded-t-lg border"
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} aria-labelledby="modal-title" size="full">
                <ModalContent
                    style={{
                        width: "80vw",
                        height: "80vh",
                        margin: 10,
                        padding: 0,
                    }}
                >
                    <ModalBody
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "calc(100vh - 50px)",
                        }}
                    >
                        <Image src={src} alt={alt} className="rounded-lg border" />
                    </ModalBody>
                    <ModalFooter
                        style={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            zIndex: 1000,
                        }}
                    >
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ImageViewer
