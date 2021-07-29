import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";
export const MotherSection = ({ form, handleChange }) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Información de la madre</h2>
      <SubSectionForm flex wrap="true">
        <h3>Información personal</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="nombre"
            name="motherInfoName"
            value={form.motherInfoName}
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="Apellido paterno"
            name="motherInfoLastName"
            value={form.motherInfoLastName}
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="Apellido materno"
            name="motherInfoSecondLastName"
            value={form.motherInfoSecondLastName}
            handleChange={handleChange}
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Información económica</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="Ocupación"
            name="motherInfoSecondLastJob"
            value={form.motherInfoSecondLastJob}
            handleChange={handleChange}
          />

          <InputForm
            type="number"
            placeHolder="$ Ingreso formal"
            name="motherInfoSecondFormalIncome"
            value={form.motherInfoSecondFormalIncome}
            handleChange={handleChange}
          />
          <InputForm
            type="number"
            placeHolder="$ Ingreso informal"
            name="motherInfoSecondInformalIncome"
            value={form.motherInfoSecondInformalIncome}
            handleChange={handleChange}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
