import { useState } from 'react';

const useModal = () => {
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState({});

    const openModal = (type, data = {}) => {
        setModalType(type);
        setModalData(data);
    };

    const closeModal = () => {
        setModalType(null);
        setModalData({});
    };

    const isOpen = Boolean(modalType);

    return { modalType, modalData, isOpen, openModal, closeModal };
};

export default useModal;
