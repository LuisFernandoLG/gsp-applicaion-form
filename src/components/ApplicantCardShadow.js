import styled, { keyframes } from "styled-components";
import { Wrapper } from "./Wrapper";

export const ApplicantCardShadow = () => {
  return (
    <ApplicantCard flex directionColumn gap="0.625rem">
      <div className="photo"></div>
      <div className="name"></div>
    </ApplicantCard>
  );
};

const flickering = keyframes`
0%{

}
100%{
    background: transparent;
}
`;
const ApplicantCard = styled(Wrapper)`
  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
  border-radius: 1rem;
  /* width: 100%; */
  /* height: 100%; */

  padding: 0.9375rem;

  .photo,
  .name {
    border-radius: 1rem;
    background: ${({ theme: { colors } }) => colors.primaryColor};

    /* animation: ${flickering} 1s ease infinite; */
  }

  .photo {
    flex-basis: 6.25rem;
  }

  .name {
    flex-basis: 3.125rem;
  }
`;
