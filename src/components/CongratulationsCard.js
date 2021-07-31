import styled from "styled-components";
import partyImage from "../img/party.svg";
import { SecondaryButton } from "./styleComponents/ButtonsStyled";
import { Wrapper } from "./Wrapper";

const CongratulationsCard = ({ name }) => {
  return (
    <Wrapper
      flex
      directionColumn
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      <div>
        <img src={partyImage} alt="congratulations" />
      </div>

      <ThankfullText>
        <span>¡ Felicidades {name || ""}!</span> Tu solicitud ha sido recibida,
        ahora solo queda esperar los resultados que se publicarán en nuestra{" "}
        <a href="https://www.facebook.com/greenscholarshipprogram">
          página de facebook
        </a>
        .
      </ThankfullText>

      <SecondaryButton as="a" href="https://gspcabo.netlify.app/">
        Volver a GSP
      </SecondaryButton>
    </Wrapper>
  );
};

export default CongratulationsCard;

const ThankfullText = styled.p`
  text-align: center;
  max-width: 37.5rem;

  line-height: 2;

  span {
    padding: 0.3125rem 0.625rem;
    /* margin: 0 2px; */
    /* border-radius: 1rem; */
    background: ${({ theme: { colors } }) => colors.secondaryColor};
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }

  a {
    color: ${({ theme: { colors } }) => colors.secondaryColor};
    font-weight: 800;
  }
`;
