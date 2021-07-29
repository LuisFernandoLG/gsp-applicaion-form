import styled from "styled-components";
import { Wrapper } from "./Wrapper";

export default function PrivacyPolicy() {
  return (
    <PrivacyPolicyStyled as="p">
      Afirmo que la información que he proporcionado en esta solicitud y
      cualquier material adicional que presente en relación con el proceso de
      ayuda financiera es completa, precisa y verdadera
      <br />
      He leído y estoy de acuerdo con el uso de mis datos personales de acuerdo
      al <br />
      <a href="http://www.cdlcbaja.org/es/aviso-de-privacidad/">
        aviso de privacidad.
      </a>
    </PrivacyPolicyStyled>
  );
}

const PrivacyPolicyStyled = styled(Wrapper)`
  line-height: 2;

  font-size: 1rem;

  text-align: center;

  a {
    font-weight: 800;
    color: ${({ theme: { colors } }) => colors.secondaryColor};
  }
`;
