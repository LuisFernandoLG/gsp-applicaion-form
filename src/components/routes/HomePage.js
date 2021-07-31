import formImage from "../../img/formImage.svg";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { useHistory } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { SecondaryButton } from "../styleComponents/ButtonsStyled";

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
      gap="2rem"
    >
      <div>
        <img src={formImage} alt="form" />
      </div>
      <GoButton onClick={goToForm}>Ir a la aplicación</GoButton>
      <BackHomeButton as="a" href="https://gspcabo.netlify.app/">
        Volver a GSP
      </BackHomeButton>
    </WelcomeCard>
  );
};

const WelcomeCard = styled(Wrapper)`
  margin-top: 3.125rem;
  width: 100%;
  height: 100%;

  /* box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight}; */
`;

const GoButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 1rem;

  background: ${({ theme: { colors } }) => colors.secondaryColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};
`;

const BackHomeButton = styled(SecondaryButton)``;

export default HomePage;
