import styled from "styled-components";
import { breakpointUp } from "../styleComponents/ResponsiveStyle";
import { Wrapper } from "../Wrapper";
import Modal from "./Modal";

export const SuccessModal = ({ closeModal, open, img, title, content }) => {
  return (
    <Modal closeModal={closeModal} open={open}>
      <Wrapper flex directionColumn gap="1rem" justifyContent="center">
        <Title>{title}</Title>
        <ImageWrapper>
          <img src={img} alt="gsp modal" />
        </ImageWrapper>
        <Content>{content}</Content>
      </Wrapper>
    </Modal>
  );
};

const Title = styled.h2`
  text-align: center;
`;

const ImageWrapper = styled.div`
  /* flex-basis: 50%; */
  margin: 0 auto;
  img {
    width: 90%;
    height: 90%;
  }
`;

const Content = styled.p`
  text-align: center;

  line-height: 2;
  font-size: 1.2rem;

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
