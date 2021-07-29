import styled from "styled-components";
import { Wrapper } from "../Wrapper";

export const CardItem = styled(Wrapper)`
  padding: 1rem;
  border-radius: 1rem;

  background: ${({ theme: { colors } }) => colors.primaryColor};
`;