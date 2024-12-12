import { create } from 'zustand';

export interface Navigation {
    isOpen: boolean;
    setIsOpen: (data?: boolean) => void;
}

const useNavigation = create<Navigation>((set) => ({
    isOpen: false, // Initial state of isOpen
    setIsOpen: (data?: boolean) =>
        set((state) => ({
            isOpen: data !== undefined ? data : !state.isOpen, // Toggle if no data provided
        })),
}));

export default useNavigation;
