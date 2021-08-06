import {
  AddButtonStyled,
  DeleteButton,
} from "../../styleComponents/ButtonsStyled";
import { CardItem } from "../../styleComponents/CardItem";
import { SectionForm } from "../../styleComponents/SectionForm";
import { SubSectionForm } from "../../styleComponents/SubSectionForm";
import { InputForm } from "../inputs/InputForm";

export const ExtracurricularSection = ({
  form,
  addNewListElements,
  handleDeleteFromListElements,
  handleChangeListElements,
  handleBlur,
}) => {
  return (
    <SectionForm flex directionColumn>
      <h2>Actividades extracurriculares</h2>
      <SubSectionForm flex wrap="true">
        <h3>Actividades</h3>
        <div className="questions">
          {form.extracurricularActivities.items.map((item, index) => {
            return (
              <CardItem key={item.id} flex directionColumn gap="1rem">
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
                  handleBlur={handleBlur}
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
                  handleBlur={handleBlur}
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
                  handleBlur={handleBlur}
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
                  handleBlur={handleBlur}
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
  );
};
