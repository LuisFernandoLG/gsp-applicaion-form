import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";
import PrivacyPolicy from "../../PrivacyPolicy";
import { RadioGroupForm } from "../RadioGroupForm";
import { Wrapper } from "../../Wrapper";
import { SubmitButton } from "../../styleComponents/ButtonsStyled";
import styled from "styled-components";
import promisePerson from "../../../img/promise.svg";
import { NavLink } from "react-router-dom";
import { routes } from "../../../helpers/routes";

export const SignAcceptSection = ({
  form,
  handleChange,
  handleBlur,
  errors,
}) => {
  return (
    <>
      <SectionForm flex directionColumn>
        <h2>Responsabilidad y firma</h2>

        <SubSectionForm flex wrap="true">
          <h3>Firma</h3>
          <div className="questions">
            <RadioGroupForm
              options={["sí", "no"]}
              placeholder="Acepto"
              value={form.signAccept}
              name="signAccept"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors["signAccept"]}
            />
          </div>
        </SubSectionForm>

        <SubSectionForm flex wrap="true">
          <h3>Foto pública</h3>
          <div className="questions">
            <RadioGroupForm
              options={["sí", "no"]}
              placeholder="Foto pública"
              value={form.signAcceptPublicImage}
              name="signAcceptPublicImage"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors["signAcceptPublicImage"]}
            />

            <PublicImageText>
              ¿Quiéres que tu foto sea <br /> pública en nuestra sección de{" "}
              <span>
                <NavLink to={routes.APPLICATIONS_PAGE}>Aspirantes</NavLink>{" "}
              </span>
            </PublicImageText>
          </div>
        </SubSectionForm>

        <PromisePersonImage>
          <img src={promisePerson} alt="promise accept" />
        </PromisePersonImage>
        <PrivacyPolicy />
        <Wrapper flex justifyContent="center" alignItems="center">
          <SubmitButton>Envíar</SubmitButton>
        </Wrapper>
      </SectionForm>
    </>
  );
};

const PromisePersonImage = styled.div`
  height: 10rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PublicImageText = styled.p`
  display: block;
  width: 100%;
  text-align: center;

  a {
    font-weight: 800;
    color: ${({ theme: { colors } }) => colors.secondaryColor};
  }
`;
