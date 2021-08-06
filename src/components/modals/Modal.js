import reactDom from "react-dom";
import styled from "styled-components";
import { buttonStyled } from "../styleComponents/ButtonsStyled";
import { Wrapper } from "../Wrapper";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, closeModal, open }) => {
  if (!open) return null;

  return reactDom.createPortal(
    <>
      <Background className="background" onClick={closeModal} />
      <ModalWrapper
        flex
        directionColumn
        alignItems="center"
        justifyContent="center"
      >
        <CloseBtn onClick={closeModal}>
          <FaTimes />
        </CloseBtn>
        <Content>{children}</Content>
      </ModalWrapper>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
// CREAR UN MODAL
const CloseBtn = styled(buttonStyled)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  background: transparent;
  color: ${({ theme: { colors } }) => colors.errorColor};
  font-size: 1.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem;
`;

const Content = styled(Wrapper)`
  padding: 1.25rem;
  height: 100%;
`;

const Background = styled.div`
  position: fixed;
  z-index: 200;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  filter: blur(100px);
  /* background: ${({ theme: { colors } }) => colors.primaryColor}; */
`;

const ModalWrapper = styled(Wrapper)`
  position: fixed;
  z-index: 250;
  top: 10%;
  bottom: 10%;

  left: 10%;
  right: 10%;

  padding: 10px;

  /* cursor: pointer; */

  border-radius: 1rem;
  background: ${({ theme: { colors } }) => colors.primaryColor};
  box-shadow: 0 0 2.5rem -0.625rem ${({ theme: { colors } }) => colors.tertiaryColor};
`;
