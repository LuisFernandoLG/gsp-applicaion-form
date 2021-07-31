import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { RadioGroupForm } from "../RadioGroupForm";
import { ProfileImageInput } from "../ProfileImageInput";

import { InputForm } from "../InputForm";
export const PersonalSection = ({ form, handleChange, handleBlur }) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Información de perfil</h2>
      <SubSectionForm flex wrap="true">
        <h3>Información personal</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="nombre"
            value={form.personalInfoName.value}
            name="personalInfoName"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="text"
            placeHolder="Apellido paterno"
            value={form.personalInfoLastName.value}
            name="personalInfoLastName"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="text"
            placeHolder="Apellido materno"
            value={form.personalInfoSecondLastName.value}
            name="personalInfoSecondLastName"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <RadioGroupForm
            options={["masculino", "femenino"]}
            value={form.personalInfoGender.value}
            placeholder="Sexo"
            name="personalInfoGender"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="date"
            placeHolder="Fecha de nacimiento"
            value={form.personalInfoBday.value}
            name="personalInfoBday"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Hablas inglés?"
            value={form.personalInfoSpeakEnglish.value}
            name="personalInfoSpeakEnglish"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <ProfileImageInput
            name="personalInfoPhoto"
            value={form.personalInfoPhoto.value}
            placeHolder="Eligir fotografía"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Contacto</h3>
        <div className="questions">
          <InputForm
            type="email"
            placeHolder="email"
            value={form.personalInfoEmail.value}
            name="personalInfoEmail"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="tel"
            placeHolder="Teléfono #1"
            name="personalInfoPhone"
            value={form.personalInfoPhone.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="tel"
            placeHolder="Teléfono #2"
            name="personalInfoPhone2"
            value={form.personalInfoPhone2.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Dirección</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="Ciudad"
            name="personalInfoCity"
            value={form.personalInfoCity.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="colonia"
            name="personalInfoSuburban"
            value={form.personalInfoSuburban.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Calle"
            name="personalInfoStreet"
            value={form.personalInfoStreet.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="number"
            placeHolder="Código postal"
            name="personalInfoCP"
            value={form.personalInfoCP.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
