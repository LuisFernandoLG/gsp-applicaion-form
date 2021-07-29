import styled from "styled-components";

const buttonStyled = styled.button`
  border-radius: 1rem;
`;

export const AddButtonStyled = styled(buttonStyled)`
  justify-self: center;
  align-self: center;

  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
  background: ${({ theme: { colors } }) => colors.secondaryColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};
  padding: 0.9375rem 1.5625rem;
`;

export const DeleteButton = styled(buttonStyled)`
  justify-self: center;
  align-self: center;

  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
  background: ${({ theme: { colors } }) => colors.errorColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};
  padding: 0.9375rem 1.5625rem;
`;

export const SubmitButton = styled(buttonStyled)`
  padding: 1rem 2rem;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.secondaryColor};
`;


export const NavigationBarButton = styled(buttonStyled)`
  padding: 1rem 2rem;

  margin: 1.875rem auto;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.secondaryColor};

  font-weight: 600;
  font-size: 1rem;
`;


export const SecondaryButton = styled(buttonStyled)`
  padding: 1rem 2rem;

  margin: 1.875rem auto;
  color: ${({ theme: { colors } }) => colors.tertiaryColor};
  background: ${({ theme: { colors } }) => colors.primaryColor};

  font-weight: 600;
  font-size: 1rem;
`;


