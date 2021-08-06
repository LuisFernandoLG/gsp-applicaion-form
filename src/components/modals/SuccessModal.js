import styled from "styled-components";
import {
  breakpointDown,
  breakpointUp,
} from "../styleComponents/ResponsiveStyle";
import Modal from "./Modal";

export const SuccessModal = ({ closeModal, open, img, title, content }) => {
  return (
    <Modal closeModal={closeModal} open={open}>
      <Title>{title}</Title>
      <ImageWrapper>
        <img src={img} />
      </ImageWrapper>
      <Content>{content}</Content>
    </Modal>
  );
};

const Title = styled.h2`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin: 2rem auto;

  ${breakpointUp("medium", "height: 30%;")}

  height: 55%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.p`
  text-align: center;
  max-width: 100%;
  line-height: 2;

  span {
    padding: 0.3125rem 0.625rem;
    background: ${({ theme: { colors } }) => colors.secondaryColor};
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }

  a {
    color: ${({ theme: { colors } }) => colors.secondaryColor};
    font-weight: 800;
  }
`;
