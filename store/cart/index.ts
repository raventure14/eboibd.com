import { create } from 'zustand';

export interface Cart {
    isOpen: boolean;
    setIsOpen: (data?: boolean) => void;
}

const useCart = create<Cart>((set) => ({
    isOpen: false, // Initial state of isOpen
    setIsOpen: (data?: boolean) =>
        set((state) => ({
            isOpen: data !== undefined ? data : !state.isOpen, // Toggle if no data provided
        })),
}));

export default useCart;
