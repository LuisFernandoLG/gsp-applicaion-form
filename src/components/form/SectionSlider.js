import styled from "styled-components";
import {
  NavigationBarButton,
  SecondaryButton,
} from "../styleComponents/ButtonsStyled";
import { breakpointUp } from "../styleComponents/ResponsiveStyle";
import { Wrapper } from "../Wrapper";

const SectionSlider = ({
  numSectionForm,
  SectionForm,
  form,
  handleChange,
  handleBlur,
  handleChangeListElements,
  addNewListElements,
  handleDeleteFromListElements,
  goNextSectionForm,
  goPrevSectionForm,
  totalSections,
  goSpecificSectionForm,
}) => {
  return (
    <>
      <NavigationCounter flex justifyContent="center">
        <Wrapper flex gap="0.5rem" wrap="true" alignContent="flex-start">
          {Array.from(Array(totalSections + 1).keys()).map((num, index) =>
            num === numSectionForm ? (
              <NavigationBarButton key={index}> {num + 1} </NavigationBarButton>
            ) : (
              <SecondaryButton
                key={index}
                onClick={() => goSpecificSectionForm(num)}
              >
                {num + 1}
              </SecondaryButton>
            )
          )}
        </Wrapper>
      </NavigationCounter>
      <SectionForm
        form={form}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleDeleteFromListElements={handleDeleteFromListElements}
        addNewListElements={addNewListElements}
        handleChangeListElements={handleChangeListElements}
      ></SectionForm>
      <NavigatiBar flex justifyContent="space-evenly">
        {numSectionForm > 0 && (
          <NavigationBarButton onClick={goPrevSectionForm}>
            Regresar
          </NavigationBarButton>
        )}

        {numSectionForm < totalSections && (
          <NavigationBarButton onClick={goNextSectionForm}>
            Siguiente
          </NavigationBarButton>
        )}
      </NavigatiBar>
    </>
  );
};

export default SectionSlider;

const NavigatiBar = styled(Wrapper)`
  margin-top: 1.125rem;
`;

const NavigationCounter = styled(Wrapper)`
  font-weight: 600;

  ${breakpointUp("small", `font-size: 10px;`)}
`;
