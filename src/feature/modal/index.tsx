import { Modal as OriginModal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, Button, ModalHeader, ModalOverlay, Box, Input } from "@chakra-ui/react"
import { createContext, useEffect, useState } from "react"
import { useToggle } from "react-use"

const ModalListContext = createContext<any>({
    list: [],
})

const BaseModal2 = () => {
    const [isOpen, toggle] = useToggle(true)
    return (
        <>
            <OriginModal isOpen={isOpen} onClose={toggle}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        BaseModal2
                        <Input />
                        <Button onClick={() => Modal.closeModal(0)}>关闭modal1</Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </OriginModal>
        </>
    )
}

const BaseModal = () => {
    const [isOpen, toggle] = useToggle(true)
    return (
        <>
            <OriginModal isOpen={isOpen} onClose={toggle}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        213123
                        <Box>111</Box>
                        <Box>111</Box>
                        <Box>111</Box>
                        <Box>111</Box>
                        <Box>111</Box>
                        <Box>111</Box>
                        <Button onClick={() => Modal.openModal(BaseModal2)}>打开一个modal</Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </OriginModal>
        </>
    )
}
export const Modal: {
    openModal: (Component?: () => JSX.Element) => void
    closeModal: (index?: number) => void,
    closeModalAll: () => void
} = {
    openModal: (Component?: () => JSX.Element) => { },
    closeModal: (index?: number) => { },
    closeModalAll: () => { },
}
export const ModalControl = () => {
    const [List, setList] = useState<any[]>([]);
    useEffect(() => {
        Modal.openModal = (Component = BaseModal) => {
            setList([...List, Component])
        }
        Modal.closeModal = (index = List.length - 1) => {
            const close = List.filter((e, i) => i !== index)
            setList(close)
        }
        Modal.closeModalAll = () => {
            setList([])
        }
    }, [List])

    return (
        <ModalListContext.Provider
            value={{
                list: List,
            }}
        >
            {
                List.map((M, i) => <M key={i} />)
            }
        </ModalListContext.Provider>
    )
}
