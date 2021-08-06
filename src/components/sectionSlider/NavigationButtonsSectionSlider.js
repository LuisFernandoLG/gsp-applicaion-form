import { PrimaryButton } from "../styleComponents/ButtonsStyled";
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
          <PrimaryButton onClick={goPrevSection}>Regresar</PrimaryButton>
        )}

        {numSection < totalSections && (
          <PrimaryButton onClick={goNextSection}>Siguiente</PrimaryButton>
        )}
      </Wrapper>
    </>
  );
};
