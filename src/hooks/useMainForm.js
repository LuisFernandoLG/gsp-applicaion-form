import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { generate } from "shortid";
import { routes } from "../helpers/routes";
import { useFetch } from "./useFetch";

const initialForm = {
  personalInfoName: "",
  personalInfoLastName: "",
  personalInfoSecondLastName: "",
  personalInfoGender: "",
  personalInfoSpeakEnglish: "",
  personalInfoPhoto: "",
  personalInfoBday: "",
  personalInfoEmail: "",
  personalInfoPhone: "",
  personalInfoPhone2: "",
  personalInfoCity: "",
  personalInfoSuburban: "",
  personalInfoStreet: "",
  personalInfoCP: "",

  fatherInfoName: "",
  fatherInfoLastName: "",
  fatherInfoSecondLastName: "",
  fatherInfoSecondLastJob: "",
  fatherInfoSecondFormalIncome: "",
  fatherInfoSecondInformalIncome: "",

  motherInfoName: "",
  motherInfoLastName: "",
  motherInfoSecondLastName: "",
  motherInfoSecondLastJob: "",
  motherInfoSecondFormalIncome: "",
  motherInfoSecondInformalIncome: "",

  economicStatusNumOfPeopleLivingAtHome: "",
  economicStatusNumOfMembersFamily: "",
  economicStatusHasOwnHouse: "",
  economicStatusHasCar: "",
  economicStatusHasBankAccount: "",
  economicStatusHasInternet: "",
  economicStatusHasJob: "",
  economicStatusTimeLivingCabo: "",

  academicBackgroundSecondarySchoolName: "",
  academicBackgroundSecondarySchoolGrades: "",
  academicBackgroundSecondarySchoolYears: "",
  academicBackgroundSecondarySchoolAddress: "",
  academicBackgroundHighySchoolName: "",
  academicBackgroundHighySchoolGrades: "",
  academicBackgroundHighySchoolYears: "",
  academicBackgroundHighySchoolAddress: "",

  extracurricularActivities: {
    items: [],

    example: {
      id: "",
      startDate: "",
      endDate: "",
      hours: "",
      description: "",
    },
  },
  extracurricularAcknowledgements: {
    items: [],
    example: {
      id: "",
      title: "",
      institution: "",
      description: "",
    },
  },

  signAccept: "",
  signAcceptPublicImage: "false",
};

export const useMainForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  let history = useHistory();
  const { post, isLoading } = useFetch();

  useEffect(() => {
    const initialLocalStorageForm = localStorage.getItem("gspForm")
      ? JSON.parse(localStorage.getItem("gspForm"))
      : initialForm;

    setForm(initialLocalStorageForm);
  }, []);

  const handleError = (e) => {
    const { name, value } = e.target;
    const isEmpty = value.trim() === "";
    setErrors({
      ...errors,
      [name]: {
        error: isEmpty,
        textError: "El campo está vacío",
      },
    });
  };

  const checkAllAnswers = () => {
    let newErrors = {};
    let isCorrect = true;
    Object.keys(initialForm).map((key) => {
      if (form[key] === "") {
        newErrors = {
          ...newErrors,
          [key]: {
            error: true,
            textError: "Campo necesario",
          },
        };

        isCorrect = false;
      }
    });
    setErrors(newErrors);

    return isCorrect;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleChangeListElements = (nameGroup, id, e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [nameGroup]: {
        ...form[nameGroup],
        items: form[nameGroup].items.map((item, index) =>
          index === id ? { ...item, [name]: value } : item
        ),
      },
    });
  };

  const addNewListElements = (nameGroup) => {
    const newItem = { ...form[nameGroup].example, id: generate() };

    setForm({
      ...form,
      [nameGroup]: {
        ...form[nameGroup],
        items: [...form[nameGroup].items, newItem],
      },
    });
  };

  const handleDeleteFromListElements = (nameGroup, index) => {
    setForm({
      ...form,
      [nameGroup]: {
        ...form[nameGroup],
        items: form[nameGroup].items.filter((item, i) => i !== index),
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkAllAnswers()) {
      const options = {
        body: form,
      };

      post("http://localhost:8000/form", options).then((data) => {
        // console.log(data);
      });
      history.push(routes.SUCCESS_PAGE);
    } else {
      alert("Llena todos los campos por favor.");
    }
  };

  const handleBlur = (e) => {
    handleError(e);
    console.log(e);
  };

  useEffect(() => {
    saveFormInLocalStorage();
  }, [form]);

  const saveFormInLocalStorage = () => {
    localStorage.setItem("gspForm", JSON.stringify(form));
  };

  return {
    form,
    handleChange,
    errors,
    handleSubmit,
    handleChangeListElements,
    addNewListElements,
    handleDeleteFromListElements,
    handleBlur,
  };
};
