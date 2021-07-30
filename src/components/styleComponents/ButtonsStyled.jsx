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
  padding: 1.5rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.color1};
`;


export const NavigationBarButton = styled(buttonStyled)`
  padding: 1.2em 1.5em;

  margin: 1.875em auto;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.secondaryColor};

  font-weight: 600;
  font-size: 1.2em;
`;


export const SecondaryButton = styled(buttonStyled)`
  padding: 1.5em 1.5em;

  margin: 1.875rem auto;
  color: ${({ theme: { colors } }) => colors.tertiaryColor};
  background: ${({ theme: { colors } }) => colors.primaryColor};

  font-weight: 800;
  font-size: 1.2em;
`;


