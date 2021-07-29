import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";
export const FatherSection = ({ form, handleChange }) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Información del padre</h2>
      <SubSectionForm flex wrap="true">
        <h3>Información personal</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="nombre"
            name="fatherInfoName"
            value={form.fatherInfoName}
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="Apellido paterno"
            name="fatherInfoLastName"
            value={form.fatherInfoLastName}
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="Apellido materno"
            name="fatherInfoSecondLastName"
            value={form.fatherInfoSecondLastName}
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
            name="fatherInfoSecondLastJob"
            value={form.fatherInfoSecondLastJob}
            handleChange={handleChange}
          />

          <InputForm
            type="number"
            placeHolder="$ Ingreso formal"
            name="fatherInfoSecondFormalIncome"
            value={form.fatherInfoSecondFormalIncome}
            handleChange={handleChange}
          />
          <InputForm
            type="number"
            placeHolder="$ Ingreso informal"
            name="fatherInfoSecondInformalIncome"
            value={form.fatherInfoSecondInformalIncome}
            handleChange={handleChange}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
