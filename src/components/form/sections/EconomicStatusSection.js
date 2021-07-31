import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";
import { RadioGroupForm } from "../RadioGroupForm";

export const EconomicStatusSection = ({ form, handleChange, handleBlur }) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Estado económico</h2>
      <SubSectionForm flex wrap="true">
        <h3>Hogar</h3>
        <div className="questions">
          <InputForm
            type="number"
            placeHolder="Número de personas en casa"
            name="economicStatusNumOfPeopleLivingAtHome"
            value={form.economicStatusNumOfPeopleLivingAtHome.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="number"
            placeHolder="Número de familiares"
            name="economicStatusNumOfMembersFamily"
            value={form.economicStatusNumOfMembersFamily.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Tienes casa propia?"
            value={form.economicStatusHasOwnHouse.value}
            name="economicStatusHasOwnHouse"
            handleChange={handleChange}
            handleBlur={handleBlur}
            // value={"masculino"}
          />
          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Cuentan con auto?"
            value={form.economicStatusHasCar.value}
            name="economicStatusHasCar"
            handleChange={handleChange}
            handleBlur={handleBlur}
            // value={"masculino"}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Cuentan con cuenta bancaria?"
            value={form.economicStatusHasBankAccount.value}
            name="economicStatusHasBankAccount"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Cuentan con cuenta internet en casa?"
            value={form.economicStatusHasInternet.value}
            name="economicStatusHasInternet"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Personal</h3>
        <div className="questions">
          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Trabajas?"
            value={form.economicStatusHasJob.value}
            name="economicStatusHasJob"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <InputForm
            type="text"
            placeHolder="Tiempo viviendo en Los Cabos"
            name="economicStatusTimeLivingCabo"
            value={form.economicStatusTimeLivingCabo.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
