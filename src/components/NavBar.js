import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../helpers/routes";
import { Wrapper } from "./Wrapper";

const NavBar = () => {
  return (
    <NavStyled
      as="nav"
      flex
      justifyContent="center"
      alignItems="center"
      gap="1rem 2rem"
    >
      <NavLink activeClassName="isActive" exact to={routes.HOME_PAGE}>
        Inicio
      </NavLink>
      <NavLink activeClassName="isActive" to={routes.FORM_PAGE}>
        Form
      </NavLink>
      <NavLink activeClassName="isActive" to={routes.APPLICATIONS_PAGE}>
        Aspirantes
      </NavLink>
    </NavStyled>
  );
};

const NavStyled = styled(Wrapper)`
  width: 100%;

  position: sticky;
  top: 0;
  background: ${({ theme: { colors } }) => colors.primaryColor};
  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
  padding: 1rem;
  z-index: 100;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  .isActive {
    background: ${({ theme: { colors } }) => colors.secondaryColor};
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }

  a {
    padding: 0.625rem 1.25rem;
    color: ${({ theme: { colors } }) => colors.tertiaryColor};
    font-weight: 600;
    /* box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight}; */
  }
`;

export default NavBar;
