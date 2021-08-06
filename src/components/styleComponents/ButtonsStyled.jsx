import styled from "styled-components";

export const buttonStyled = styled.button.attrs({type:"button"})`
  border-radius: 1rem;
  padding: 1.2em 1.2em;
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






export const NavigationBarButton = styled(buttonStyled)`
  padding: 1.2em 1.5em;

  margin: 1.875em auto;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.secondaryColor};

  font-weight: 600;
  font-size: 1.2em;
`;


export const SecondaryButton = styled(buttonStyled)`
  margin: 2rem auto;
  color: ${({ theme: { colors } }) => colors.tertiaryColor};
  background: ${({ theme: { colors } }) => colors.primaryColor};
  
  font-weight: 800;
  font-size: 1.2em;
  `;


export const PrimaryButton = styled(buttonStyled)`
margin: 0.625rem auto;
color: ${({ theme: { colors } }) => colors.primaryColor};
background: ${({ theme: { colors } }) => colors.secondaryColor};

font-weight: 700;
font-size: 1.2em;

`