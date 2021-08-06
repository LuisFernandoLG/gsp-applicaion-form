import formImage from "../../img/formImage.svg";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { useHistory } from "react-router-dom";
import { routes } from "../../helpers/routes";
import {
  PrimaryButton,
  SecondaryButton,
} from "../styleComponents/ButtonsStyled";

const HomePage = () => {
  let history = useHistory();

  const goToForm = () => {
    history.push(routes.FORM_PAGE);
  };

  return (
    <WelcomeCard
      flex
      directionColumn
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <img src={formImage} alt="form" />
      </div>
      <PrimaryButton onClick={goToForm}>Ir a la aplicación</PrimaryButton>
      <SecondaryButton as="a" href="https://gspcabo.netlify.app/">
        Volver a GSP
      </SecondaryButton>
    </WelcomeCard>
  );
};

const WelcomeCard = styled(Wrapper)`
  margin-top: 3.125rem;
  width: 100%;
  height: 10%;
`;

export default HomePage;
