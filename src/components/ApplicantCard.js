import styled from "styled-components";
import formImage from "../img/formImage.svg";
import { Wrapper } from "./Wrapper";

export const ApplicantCard = ({
  img,
  name,
  lastName,
  secondLastName,
  publicPhoto,
}) => {
  return (
    <ApplicantCardStyled as="figure" flex directionColumn gap="1rem">
      <div className="image-profile">
        <img src={publicPhoto === "sí" ? img : formImage} alt="applicant" />
      </div>
      <figcaption>{`${name} ${lastName} ${secondLastName}`}</figcaption>
    </ApplicantCardStyled>
  );
};

const ApplicantCardStyled = styled(Wrapper)`
  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};

  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  height: 16rem;

  img,
  figcaption {
    pointer-events: none;
    &::selection {
      background: transparent;
    }
  }

  .image-profile {
    border-radius: 1rem;
    overflow: hidden;
    flex-basis: 80%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  figcaption {
    font-weight: 600;
    text-align: center;
    font-size: 0.9rem;
    color: ${({ theme: { colors } }) => colors.tertiaryColor};
  }
`;
