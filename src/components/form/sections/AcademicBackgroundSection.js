import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";

export const AcademicBackgroundSection = ({
  form,
  handleChange,
  handleBlur,
}) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Historial academico</h2>
      <SubSectionForm flex wrap="true">
        <h3>Secundaria</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="nombre"
            name="academicBackgroundSecondarySchoolName"
            value={form.academicBackgroundSecondarySchoolName}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="number"
            placeHolder="Promedio"
            name="academicBackgroundSecondarySchoolGrades"
            value={form.academicBackgroundSecondarySchoolGrades}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="number"
            placeHolder="años cursados"
            name="academicBackgroundSecondarySchoolYears"
            value={form.academicBackgroundSecondarySchoolYears}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="text"
            placeHolder="Dirección"
            name="academicBackgroundSecondarySchoolAddress"
            value={form.academicBackgroundSecondarySchoolAddress}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Preparatoria</h3>
        <div className="questions">
          <InputForm
            type="text"
            placeHolder="nombre"
            name="academicBackgroundHighySchoolName"
            value={form.academicBackgroundHighySchoolName}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="number"
            placeHolder="Promedio"
            name="academicBackgroundHighySchoolGrades"
            value={form.academicBackgroundHighySchoolGrades}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <InputForm
            type="text"
            placeHolder="años cursados"
            name="academicBackgroundHighySchoolYears"
            value={form.academicBackgroundHighySchoolYears}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Dirección"
            name="academicBackgroundHighySchoolAddress"
            value={form.academicBackgroundHighySchoolAddress}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
