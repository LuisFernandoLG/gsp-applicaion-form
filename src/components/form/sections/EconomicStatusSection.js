import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";

import { InputForm } from "../InputForm";
import { RadioGroupForm } from "../RadioGroupForm";

export const EconomicStatusSection = ({ form, handleChange }) => {
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
            value={form.economicStatusNumOfPeopleLivingAtHome}
            handleChange={handleChange}
          />

          <InputForm
            type="number"
            placeHolder="Número de familiares"
            name="economicStatusNumOfMembersFamily"
            value={form.economicStatusNumOfMembersFamily}
            handleChange={handleChange}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Tienes casa propia?"
            value={form.economicStatusHasOwnHouse}
            name="economicStatusHasOwnHouse"
            handleChange={handleChange}
            // value={"masculino"}
          />
          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Cuentan con auto?"
            value={form.economicStatusHasCar}
            name="economicStatusHasCar"
            handleChange={handleChange}
            // value={"masculino"}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Cuentan con cuenta bancaria?"
            value={form.economicStatusHasBankAccount}
            name="economicStatusHasBankAccount"
            handleChange={handleChange}
          />

          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Cuentan con cuenta internet en casa?"
            value={form.economicStatusHasInternet}
            name="economicStatusHasInternet"
            handleChange={handleChange}
          />
        </div>
      </SubSectionForm>

      <SubSectionForm flex wrap="true">
        <h3>Personal</h3>
        <div className="questions">
          <RadioGroupForm
            options={["sí", "no"]}
            placeholder="¿Trabajas?"
            value={form.economicStatusHasJob}
            name="economicStatusHasJob"
            handleChange={handleChange}
          />

          <InputForm
            type="text"
            placeHolder="Tiempo viviendo en Los Cabos"
            name="economicStatusTimeLivingCabo"
            value={form.economicStatusTimeLivingCabo}
            handleChange={handleChange}
          />
        </div>
      </SubSectionForm>
    </SectionForm>
  );
};
