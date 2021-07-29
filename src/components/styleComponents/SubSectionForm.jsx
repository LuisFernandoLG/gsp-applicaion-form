import styled from "styled-components";
import { Wrapper } from "../Wrapper";


export const SubSectionForm = styled(Wrapper)`
  padding: 1rem;
  gap: 2rem;

  & > h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    @media screen and (max-width: 50rem) {
      flex-basis: 100%;
    }
  }
  .questions {
    flex-grow: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 50rem) {
      grid-template-columns: 1fr;
    }

    gap: 2rem;
  }
`;
