import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";
export const MotherSection = ({ form, handleChange, handleBlur }) => {
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
            value={form.motherInfoName.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Apellido paterno"
            name="motherInfoLastName"
            value={form.motherInfoLastName.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Apellido materno"
            name="motherInfoSecondLastName"
            value={form.motherInfoSecondLastName.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
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
            value={form.motherInfoSecondLastJob.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="number"
            placeHolder="$ Ingreso formal"
            name="motherInfoSecondFormalIncome"
            value={form.motherInfoSecondFormalIncome.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="number"
            placeHolder="$ Ingreso informal"
            name="motherInfoSecondInformalIncome"
            value={form.motherInfoSecondInformalIncome.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
