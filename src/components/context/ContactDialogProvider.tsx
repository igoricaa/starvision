'use client';

import { createContext, useState, useContext } from 'react';

type ContactDialogContextType = {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

const ContactDialogContext = createContext<
  ContactDialogContextType | undefined
>(undefined);

export const ContactDialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactDialogContext.Provider
      value={{
        isOpen,
        openDialog: () => setIsOpen(true),
        closeDialog: () => setIsOpen(false),
      }}
    >
      {children}
    </ContactDialogContext.Provider>
  );
};

export const useContactDialog = () => {
  const context = useContext(ContactDialogContext);
  if (context === undefined) {
    throw new Error(
      'useContactDialog must be used within a ContactDialogProvider'
    );
  }
  return context;
};
