import { useSliderSection } from "../../hooks/useSliderSection";
import { NavigationNavSlider } from "./NavigationNavSectionSlider";
import { Section } from "../form/sections/Section";
import { NavigationButtonsSectionSlider } from "./NavigationButtonsSectionSlider";

const SectionSlider = ({ initialSections, ...res }) => {
  const {
    goNextSectionForm,
    goPrevSectionForm,
    goSpecificSectionForm,
    currentSection,
    numSectionForm,
    totalSections,
  } = useSliderSection(initialSections);

  return (
    <>
      <NavigationNavSlider
        totalSections={totalSections}
        goSpecificSection={goSpecificSectionForm}
        currentNumSection={numSectionForm}
      />
      <Section component={currentSection} {...res} />
      <NavigationButtonsSectionSlider
        goNextSection={goNextSectionForm}
        goPrevSection={goPrevSectionForm}
        numSection={numSectionForm}
        totalSections={totalSections}
      />
    </>
  );
};

export default SectionSlider;
