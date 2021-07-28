import styled from "styled-components";
import InputForm from "./InputForm";
import { RadioGroupForm } from "./RadioGroupForm";
import { Wrapper } from "../Wrapper";
import { useMainForm } from "../../hooks/useMainForm";
import { ProfileImageInput } from "./ProfileImageInput";

export const MainForm = () => {
  const {
    form,
    handleChange,
    handleSubmit,
    handleChangeListElements,
    addNewListElements,
    handleDeleteFromListElements,
  } = useMainForm();

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Sections>
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

              <ProfileImageInput />
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
                type="text"
                placeHolder="Código postal"
                name="personalInfoCP"
                value={form.personalInfoCP}
                handleChange={handleChange}
              />
            </div>
          </SubSectionForm>
        </SectionForm>

        {/*  */}

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
                type="text"
                placeHolder="Ingreso formal"
                name="fatherInfoSecondFormalIncome"
                value={form.fatherInfoSecondFormalIncome}
                handleChange={handleChange}
              />
              <InputForm
                type="text"
                placeHolder="Ingreso informal"
                name="fatherInfoSecondInformalIncome"
                value={form.fatherInfoSecondInformalIncome}
                handleChange={handleChange}
              />
            </div>
          </SubSectionForm>
        </SectionForm>

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
                type="text"
                placeHolder="Ingreso formal"
                name="motherInfoSecondFormalIncome"
                value={form.motherInfoSecondFormalIncome}
                handleChange={handleChange}
              />
              <InputForm
                type="text"
                placeHolder="Ingreso informal"
                name="motherInfoSecondInformalIncome"
                value={form.motherInfoSecondInformalIncome}
                handleChange={handleChange}
              />
            </div>
          </SubSectionForm>
        </SectionForm>

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
              />
              <InputForm
                type="number"
                placeHolder="Promedio"
                name="academicBackgroundSecondarySchoolGrades"
                value={form.academicBackgroundSecondarySchoolGrades}
                handleChange={handleChange}
              />
              <InputForm
                type="text"
                placeHolder="Dirección"
                name="academicBackgroundSecondarySchoolAddress"
                value={form.academicBackgroundSecondarySchoolAddress}
                handleChange={handleChange}
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
              />
              <InputForm
                type="number"
                placeHolder="Promedio"
                name="academicBackgroundHighySchoolGrades"
                value={form.academicBackgroundHighySchoolGrades}
                handleChange={handleChange}
              />
              <InputForm
                type="text"
                placeHolder="años cursados"
                name="academicBackgroundHighySchoolYears"
                value={form.academicBackgroundHighySchoolYears}
                handleChange={handleChange}
              />

              <InputForm
                type="text"
                placeHolder="Dirección"
                name="academicBackgroundHighySchoolAddress"
                value={form.academicBackgroundHighySchoolAddress}
                handleChange={handleChange}
              />
            </div>
          </SubSectionForm>
        </SectionForm>

        <SectionForm flex directionColumn>
          <h2>Actividades extracurriculares</h2>
          <SubSectionForm flex wrap="true">
            <h3>Actividades</h3>
            <div className="questions">
              {form.extracurricularActivities.items.map((item, index) => {
                return (
                  <CardItem key={index} flex directionColumn gap="1rem">
                    <DeleteButton
                      onClick={() =>
                        handleDeleteFromListElements(
                          "extracurricularActivities",
                          index
                        )
                      }
                    >
                      Delete
                    </DeleteButton>
                    <InputForm
                      type="date"
                      placeHolder="Fecha inicio"
                      name="startDate"
                      value={item.startDate}
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularActivities",
                          index,
                          e
                        )
                      }
                    />

                    <InputForm
                      type="date"
                      placeHolder="Fecha fin"
                      name="endDate"
                      value={item.endDate}
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularActivities",
                          index,
                          e
                        )
                      }
                    />
                    <InputForm
                      type="number"
                      placeHolder="Total de horas"
                      name="hours"
                      value={item.hours}
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularActivities",
                          index,
                          e
                        )
                      }
                    />
                    <InputForm
                      type="text"
                      placeHolder="descripción"
                      value={item.description}
                      name="description"
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularActivities",
                          index,
                          e
                        )
                      }
                    />
                  </CardItem>
                );
              })}
              <AddButtonStyled
                onClick={() => addNewListElements("extracurricularActivities")}
              >
                Agregar
              </AddButtonStyled>
            </div>
          </SubSectionForm>

          <SubSectionForm flex wrap="true">
            <h3>Reconocimientos</h3>
            <div className="questions">
              {form.extracurricularAcknowledgements.items.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    flex
                    directionColumn
                    gap="1rem"
                    className="activities"
                  >
                    <DeleteButton
                      onClick={() =>
                        handleDeleteFromListElements(
                          "extracurricularAcknowledgements",
                          index
                        )
                      }
                    >
                      Delete
                    </DeleteButton>
                    <InputForm
                      type="text"
                      placeHolder="Reconocimiento"
                      value={item.title}
                      name="title"
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularAcknowledgements",
                          index,
                          e
                        )
                      }
                    />

                    <InputForm
                      type="text"
                      placeHolder="Institución"
                      value={item.institution}
                      name="institution"
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularAcknowledgements",
                          index,
                          e
                        )
                      }
                    />
                    <InputForm
                      type="text"
                      placeHolder="Descripción"
                      value={item.description}
                      name="description"
                      handleChange={(e) =>
                        handleChangeListElements(
                          "extracurricularAcknowledgements",
                          index,
                          e
                        )
                      }
                    />
                  </CardItem>
                );
              })}
              <AddButtonStyled
                onClick={() =>
                  addNewListElements("extracurricularAcknowledgements")
                }
              >
                Agregar{" "}
              </AddButtonStyled>
            </div>
          </SubSectionForm>
        </SectionForm>

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
        </SectionForm>

        <Wrapper flex justifyContent="center" alignItems="center">
          <SubmitButton type="submit">Envíar</SubmitButton>
        </Wrapper>
      </Sections>
    </FormStyled>
  );
};

const FormStyled = styled.form``;

const Sections = styled(Wrapper)`
  h2 {
    margin-top: 3.125rem;
    font-size: 30px;
    width: 100%;
  }
`;

const SectionForm = styled(Wrapper)`
  gap: 3.125rem;
  margin: 3.125rem 0 0 3.125rem;
  h2 {
    font-size: 30px;
    text-align: center;
  }
`;

const SubSectionForm = styled(Wrapper)`
  padding: 1rem;
  gap: 2rem;

  & > h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    @media screen and (max-width: 50rem) {
      flex-basis: 100%;
      /* background: red; */
    }
  }
  .questions {
    flex-grow: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 50rem) {
      grid-template-columns: 1fr;
    }

    gap: 2rem;
  }
`;
const buttonStyled = styled.button`
  border-radius: 1rem;
`;

const AddButtonStyled = styled(buttonStyled)`
  justify-self: center;
  align-self: center;

  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
  background: ${({ theme: { colors } }) => colors.secondaryColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};
  padding: 0.9375rem 1.5625rem;
`;

const DeleteButton = styled(buttonStyled)`
  justify-self: center;
  align-self: center;
  border-radius: 1rem;

  box-shadow: ${({ theme: { colors } }) => colors.boxShadowLight};
  background: ${({ theme: { colors } }) => colors.errorColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};
  padding: 0.9375rem 1.5625rem;
`;

const SubmitButton = styled(buttonStyled)`
  padding: 1rem 2rem;
  margin: 1.875rem auto;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background: ${({ theme: { colors } }) => colors.secondaryColor};
`;

const CardItem = styled(Wrapper)`
  padding: 1rem;
  border-radius: 1rem;

  background: ${({ theme: { colors } }) => colors.primaryColor};

  /* &:not(:last-child) {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.tertiaryColor};
  }
   */
`;

const Divider = styled.div`
  background: ${({ them: { colors } }) => colors.secondaryColor};
`;
