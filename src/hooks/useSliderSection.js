import { useEffect, useState } from "react";

export const useSliderSection = (initialSections, numSectionInit = 0) => {
  const [numSectionForm, setNumSectionForm] = useState(numSectionInit);

  const totalSections = initialSections.length - 1;

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
    currentSection: initialSections[numSectionForm],
    numSectionForm,
  };
};
