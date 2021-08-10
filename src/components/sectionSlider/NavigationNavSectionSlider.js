import styled from "styled-components";
import { breakpointUp } from "../styleComponents/ResponsiveStyle";
import {
  NavigationBarButton,
  SecondaryButton,
} from "../styleComponents/ButtonsStyled";
import { Wrapper } from "../Wrapper";

export const NavigationNavSlider = ({
  totalSections,
  goSpecificSection,
  currentNumSection,
  errors,
}) => {
  const sections = [
    errors.personalInfo,
    errors.fatherInfo,
    errors.motherInfo,
    errors.academicBackground,
    errors.economicStatus,
    0,
    errors.signAcceptSection,
  ];

  console.log(sections);

  return (
    <NavigationNavSliderStyled flex justifyContent="center">
      <Wrapper flex gap="0.5rem" wrap="true" alignContent="flex-start">
        {sections.map((item, index) => {
          console.log(item);
          return index === currentNumSection ? (
            <NavigationBarButton error={item > 0} key={index}>
              {" "}
              {index + 1}{" "}
            </NavigationBarButton>
          ) : (
            <SecondaryButton
              key={index}
              error={item > 0}
              onClick={() => goSpecificSection(index)}
            >
              {index + 1}
            </SecondaryButton>
          );
        })}
      </Wrapper>
    </NavigationNavSliderStyled>
  );
};

const NavigationNavSliderStyled = styled(Wrapper)`
  font-weight: 600;
  ${breakpointUp("small", `font-size: 10px;`)}
`;
