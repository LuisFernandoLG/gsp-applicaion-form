import { useHistory } from "react-router-dom";
import { routes } from "../../helpers/routes";
import notFoundImg from "../../img/notFound.svg";
import { PrimaryButton } from "../styleComponents/ButtonsStyled";
import { Wrapper } from "../Wrapper";

const PageNotFoundPage = () => {
  let history = useHistory();

  const goToHome = () => history.push(routes.HOME_PAGE);

  return (
    <Wrapper flex directionColumn justifyContent="center" alignItems="center">
      <img src={notFoundImg} alt="not found" />
      <h3>¿Estás perdido?</h3>
      <PrimaryButton onClick={goToHome}>Volver al inicio</PrimaryButton>
    </Wrapper>
  );
};

export default PageNotFoundPage;
