import styled from "styled-components";
import Menu from "./Menu";
import { CurrentModal, useModal } from "../contexts/modalCtx";

type Props = {
  pathList: string[];
};

export default function Header({ pathList }: Props) {
  return (
    <HeaderContainer>
      <div>logo</div>
      <Menu pathList={pathList} />
      <Sign />
      <div>noti</div>
    </HeaderContainer>
  );
}

const Sign = () => {
  const { dispatch } = useModal();

  const openModal = (modalName: CurrentModal) => {
    dispatch({ type: "MODAL_OPEN", payload: modalName });
  };

  return (
    <div>
      <div onClick={() => openModal("signIn")}>sign in</div>
      <div onClick={() => openModal("signUp")}>sign up</div>
    </div>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  background-color: #f3efef;
`;
