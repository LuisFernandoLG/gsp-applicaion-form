import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { useMainForm } from "../../hooks/useMainForm";
import SectionSlider from "./SectionSlider";
import { useSliderSection } from "../../hooks/useSliderSection";

export const MainForm = () => {
  const {
    form,
    files,
    handleChange,
    handleSubmit,
    handleChangeListElements,
    addNewListElements,
    handleDeleteFromListElements,
    handleBlur,
    errors,
    isLoading,
    handleChangeFiles,
  } = useMainForm();

  const {
    goNextSectionForm,
    goPrevSectionForm,
    goSpecificSectionForm,
    totalSections,
    initialSections,
    numSectionForm,
  } = useSliderSection();

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Sections>
        <SectionSlider
          handleChangeFiles={handleChangeFiles}
          goSpecificSectionForm={goSpecificSectionForm}
          totalSections={totalSections}
          goNextSectionForm={goNextSectionForm}
          goPrevSectionForm={goPrevSectionForm}
          SectionForm={initialSections[numSectionForm]}
          numSectionForm={numSectionForm}
          form={form}
          files={files}
          isLoading={isLoading}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleDeleteFromListElements={handleDeleteFromListElements}
          addNewListElements={addNewListElements}
          handleChangeListElements={handleChangeListElements}
        />
      </Sections>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  /* margin-top: 3.125rem; */
`;

const Sections = styled(Wrapper)`
  h2 {
    text-align: center;
    font-size: 30px;
    width: 100%;
  }
`;
