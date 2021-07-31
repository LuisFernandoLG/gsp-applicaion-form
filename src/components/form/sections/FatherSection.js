import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";
export const FatherSection = ({ form, handleChange, handleBlur }) => {
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
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Apellido paterno"
            name="fatherInfoLastName"
            value={form.fatherInfoLastName}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Apellido materno"
            name="fatherInfoSecondLastName"
            value={form.fatherInfoSecondLastName}
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
            name="fatherInfoSecondLastJob"
            value={form.fatherInfoSecondLastJob}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="number"
            placeHolder="$ Ingreso formal"
            name="fatherInfoSecondFormalIncome"
            value={form.fatherInfoSecondFormalIncome}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="number"
            placeHolder="$ Ingreso informal"
            name="fatherInfoSecondInformalIncome"
            value={form.fatherInfoSecondInformalIncome}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
