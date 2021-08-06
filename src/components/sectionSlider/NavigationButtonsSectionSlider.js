import styled from "styled-components";
import { NavigationBarButton } from "../styleComponents/ButtonsStyled";
import { Wrapper } from "../Wrapper";

export const NavigationButtonsSectionSlider = ({
  goPrevSection,
  goNextSection,
  numSection,
  totalSections,
}) => {
  return (
    <>
      <Wrapper flex justifyContent="space-evenly">
        {numSection > 0 && (
          <NavigationBarButton onClick={goPrevSection}>
            Regresar
          </NavigationBarButton>
        )}

        {numSection < totalSections && (
          <NavigationBarButton onClick={goNextSection}>
            Siguiente
          </NavigationBarButton>
        )}
      </Wrapper>
    </>
  );
};
