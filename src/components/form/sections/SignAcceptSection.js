import { SectionForm } from "../../styleComponents/SectionForm";
import partyImage from "../../../img/party.svg";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import PrivacyPolicy from "../../PrivacyPolicy";
import { RadioGroupForm } from "../inputs/RadioGroupForm";
import { buttonStyled } from "../../styleComponents/ButtonsStyled";
import styled from "styled-components";
import promisePerson from "../../../img/promise.svg";
import { NavLink } from "react-router-dom";
import { routes } from "../../../helpers/routes";
import { useEffect, useRef, useState } from "react";

export const SignAcceptSection = ({
  form,
  handleChange,
  handleBlur,
  errors,
  isLoading,
}) => {
  const submitBtnRef = useRef(null);

  useEffect(() => {
    if (isLoading) submitBtnRef.current.setAttribute("disabled", "true");
    else submitBtnRef.current.removeAttribute("disabled");
  }, [isLoading]);

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
        <SubmitButton ref={submitBtnRef}>
          {isLoading ? "Enviando..." : "Envíar"}
        </SubmitButton>
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

const SubmitButton = styled(buttonStyled).attrs({ type: "submit" })`
  padding: 1.5rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.color1};
  position: relative;

  margin: 0 auto;

  &:disabled {
    color: ${({ theme: { colors } }) => colors.tertiaryColor};
    background: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;
