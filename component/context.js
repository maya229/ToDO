import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};
export const AppProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    const openModal = () => {
        console.log(showModal);
        setShowModal(true);
        console.log('oppenennn' + showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const addHandler = (newItem) => {
        setData((prevData) => [...prevData, newItem]);
        closeModal();
    }
    useEffect(() => {
        console.log('Updated Data:', data);
    }, [data]);
    const deleteHandler = (index) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        });
    };


    return (
        <AppContext.Provider value={{ openModal, closeModal, showModal, addHandler, data, deleteHandler }}>
            {children}
        </AppContext.Provider>
    );
};