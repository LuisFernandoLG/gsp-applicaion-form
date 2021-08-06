import { useMainForm } from "../../hooks/useMainForm";
import SectionSlider from "../sectionSlider/SectionSlider";
import { AcademicBackgroundSection } from "../form/sections/AcademicBackgroundSection";
import { EconomicStatusSection } from "../form/sections/EconomicStatusSection";
import { ExtracurricularSection } from "../form/sections/ExtracurricularSection";
import { FatherSection } from "../form/sections/FatherSection";
import { MotherSection } from "../form/sections/MotherSection";
import { PersonalSection } from "../form/sections/PersonalSection";
import { SignAcceptSection } from "../form/sections/SignAcceptSection";
import { SuccessModal } from "../modals/SuccessModal";
import { useEffect, useState } from "react";

const initialSections = [
  PersonalSection,
  FatherSection,
  MotherSection,
  AcademicBackgroundSection,
  EconomicStatusSection,
  ExtracurricularSection,
  SignAcceptSection,
];

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
    saveFilesLocalStorage,
    infoModal,
  } = useMainForm();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  useEffect(() => {
    if (infoModal) openModal();
  }, [infoModal]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SectionSlider
          initialSections={initialSections}
          form={form}
          files={files}
          handleChangeFiles={handleChangeFiles}
          saveFilesLocalStorage={saveFilesLocalStorage}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleDeleteFromListElements={handleDeleteFromListElements}
          addNewListElements={addNewListElements}
          handleChangeListElements={handleChangeListElements}
          isLoading={isLoading}
        />
      </form>

      {isOpenModal && (
        <SuccessModal
          closeModal={closeModal}
          open={isOpenModal}
          img={infoModal.img}
          title={infoModal.title}
          content={infoModal.content}
        />
      )}
    </>
  );
};
