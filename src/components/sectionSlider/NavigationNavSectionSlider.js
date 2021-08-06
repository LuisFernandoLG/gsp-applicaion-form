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
}) => {
  return (
    <NavigationNavSliderStyled flex justifyContent="center">
      <Wrapper flex gap="0.5rem" wrap="true" alignContent="flex-start">
        {Array.from(Array(totalSections + 1).keys()).map((num, index) =>
          num === currentNumSection ? (
            <NavigationBarButton key={index}> {num + 1} </NavigationBarButton>
          ) : (
            <SecondaryButton key={index} onClick={() => goSpecificSection(num)}>
              {num + 1}
            </SecondaryButton>
          )
        )}
      </Wrapper>
    </NavigationNavSliderStyled>
  );
};

const NavigationNavSliderStyled = styled(Wrapper)`
  font-weight: 600;
  ${breakpointUp("small", `font-size: 10px;`)}
`;
