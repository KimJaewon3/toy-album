import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type CurrentModal = "signIn" | "signUp" | "detailPhoto" | null;

type ModalInfo = {
  currentModal: CurrentModal;
  isOpen: boolean;
};

interface ModalContextType {
  modalInfo: ModalInfo;
  dispatch: React.Dispatch<Action>;
}

interface ModalProviderProps {
  children: ReactNode;
}

const initialModalInfo: ModalInfo = {
  currentModal: null,
  isOpen: false,
};

// context
const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("must be used within a Provider");
  }
  return context;
};

// provider
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalInfo, dispatch] = useReducer(modalReducer, initialModalInfo);

  return <ModalContext.Provider value={{ modalInfo, dispatch }}>{children}</ModalContext.Provider>;
};

// reducer
type Action = { type: "MODAL_OPEN"; payload: CurrentModal } | { type: "MODAL_CLOSE" };

const modalReducer = (state: ModalInfo, action: Action): ModalInfo => {
  switch (action.type) {
    case "MODAL_OPEN":
      return {
        currentModal: action.payload,
        isOpen: true,
      };
    case "MODAL_CLOSE": {
      return {
        currentModal: null,
        isOpen: false,
      };
    }
    default:
      return state;
  }
};
