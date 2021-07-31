import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";
import PrivacyPolicy from "../../PrivacyPolicy";
import { RadioGroupForm } from "../RadioGroupForm";
import { Wrapper } from "../../Wrapper";
import { SubmitButton } from "../../styleComponents/ButtonsStyled";
import styled from "styled-components";
import promisePerson from "../../../img/promise.svg";

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
