import { useEffect, useState } from "react";
import { AcademicBackgroundSection } from "../components/form/sections/AcademicBackgroundSection";
import { EconomicStatusSection } from "../components/form/sections/EconomicStatusSection";
import { ExtracurricularSection } from "../components/form/sections/ExtracurricularSection";
import { FatherSection } from "../components/form/sections/FatherSection";
import { MotherSection } from "../components/form/sections/MotherSection";
import { PersonalSection } from "../components/form/sections/PersonalSection";
import { SignAcceptSection } from "../components/form/sections/SignAcceptSection";

const initialSections = [
  PersonalSection,
  FatherSection,
  MotherSection,
  AcademicBackgroundSection,
  EconomicStatusSection,
  ExtracurricularSection,
  SignAcceptSection,
];

const totalSections = initialSections.length - 1;

export const useSliderSection = () => {
  const [numSectionForm, setNumSectionForm] = useState(0);

  const goNextSectionForm = () => {
    numSectionForm < totalSections && setNumSectionForm(numSectionForm + 1);
  };

  const goPrevSectionForm = () => {
    numSectionForm <= totalSections && setNumSectionForm(numSectionForm - 1);
  };

  const goSpecificSectionForm = (numSection) => {
    setNumSectionForm(numSection);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [numSectionForm]);

  return {
    goNextSectionForm,
    goPrevSectionForm,
    goSpecificSectionForm,
    totalSections,
    initialSections,
    numSectionForm,
  };
};
