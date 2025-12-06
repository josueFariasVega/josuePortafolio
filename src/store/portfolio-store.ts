import { create } from 'zustand';

interface PortfolioState {
  // UI State
  isMenuOpen: boolean;
  isDarkMode: boolean;
  currentSection: string;
  isLoading: boolean;
  
  // Contact Form State
  contactForm: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  
  // Actions
  setMenuOpen: (isOpen: boolean) => void;
  setDarkMode: (isDark: boolean) => void;
  setCurrentSection: (section: string) => void;
  setLoading: (loading: boolean) => void;
  updateContactForm: (field: keyof PortfolioState['contactForm'], value: string) => void;
  resetContactForm: () => void;
}

const initialContactForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  // Initial State
  isMenuOpen: false,
  isDarkMode: true, // Always dark for our futuristic theme
  currentSection: 'home',
  isLoading: false,
  contactForm: initialContactForm,
  
  // Actions
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setLoading: (loading) => set({ isLoading: loading }),
  
  updateContactForm: (field, value) => set((state) => ({
    contactForm: {
      ...state.contactForm,
      [field]: value
    }
  })),
  
  resetContactForm: () => set({ contactForm: initialContactForm })
}));