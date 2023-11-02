import styled from "styled-components";
import { useModal } from "../contexts/modalCtx";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Modal() {
  const { modalInfo, dispatch } = useModal();

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      dispatch({ type: "MODAL_CLOSE" });
    }
  }

  return (
    <ModalContainer onClick={(e) => closeModal(e)}>
      {modalInfo.currentModal === "signIn" && <SignIn />}
      {modalInfo.currentModal === "signUp" && <SignUp />}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.137);
`;
