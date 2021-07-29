import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";
import PrivacyPolicy from "../../PrivacyPolicy";
import { RadioGroupForm } from "../RadioGroupForm";
import { Wrapper } from "../../Wrapper";
import { SubmitButton } from "../../styleComponents/ButtonsStyled";

export const SignAcceptSection = ({ form, handleChange }) => {
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
            />
          </div>
        </SubSectionForm>
        <Wrapper flex justifyContent="center" alignItems="center">
          <SubmitButton type="submit">Envíar</SubmitButton>
        </Wrapper>
        <PrivacyPolicy />
      </SectionForm>
    </>
  );
};
