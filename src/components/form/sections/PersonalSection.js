import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { RadioGroupForm } from "../RadioGroupForm";
import { ProfileImageInput } from "../ProfileImageInput";

import { InputForm } from "../InputForm";
export const PersonalSection = ({ form, handleChange }) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Información de perfil</h2>
      <SubSectionForm flex wrap="true">
        <h3>Información personal</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="nombre"
            value={form.personalInfoName}
            name="personalInfoName"
            handleChange={handleChange}
          />
          <InputForm
            type="text"
            placeHolder="Apellido paterno"
            value={form.personalInfoLastName}
            name="personalInfoLastName"
            handleChange={handleChange}
          />
          <InputForm
            type="text"
            placeHolder="Apellido materno"
            value={form.personalInfoSecondLastName}
            name="personalInfoSecondLastName"
            handleChange={handleChange}
          />
          <RadioGroupForm
            options={["masculino", "femenino"]}
            value={form.personalInfoGender}
            placeholder="Sexo"
            name="personalInfoGender"
            handleChange={handleChange}
          />
          <InputForm
            type="date"
            placeHolder="Fecha de nacimiento"
            value={form.personalInfoBday}
            name="personalInfoBday"
            handleChange={handleChange}
          />

          <ProfileImageInput
            name="personalInfoPhoto"
            value={form.personalInfoPhoto}
            handleChange={handleChange}
            placeHolder="Eligir fotografía"
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Contacto</h3>
        <div className="questions">
          <InputForm
            type="email"
            placeHolder="email"
            value={form.personalInfoEmail}
            name="personalInfoEmail"
            handleChange={handleChange}
          />
          <InputForm
            type="number"
            placeHolder="Teléfono"
            name="personalInfoPhone"
            value={form.personalInfoPhone}
            handleChange={handleChange}
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
            value={form.personalInfoCity}
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="colonia"
            name="personalInfoSuburban"
            value={form.personalInfoSuburban}
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="Calle"
            name="personalInfoStreet"
            value={form.personalInfoStreet}
            handleChange={handleChange}
          />

          <InputForm
            type="number"
            placeHolder="Código postal"
            name="personalInfoCP"
            value={form.personalInfoCP}
            handleChange={handleChange}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
