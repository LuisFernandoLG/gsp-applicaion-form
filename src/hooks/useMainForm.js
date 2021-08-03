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
  signAcceptPublicImage: "no",
};

const initialFileInputs = {
  personalInfoPhoto: "",
};

const initialLocalStorageForm = localStorage.getItem("gspForm")
  ? JSON.parse(localStorage.getItem("gspForm"))
  : initialForm;

const initialLocalStorageFiles = localStorage.getItem("gspFiles")
  ? JSON.parse(localStorage.getItem("gspFiles"))
  : initialFileInputs;

export const useMainForm = () => {
  const [form, setForm] = useState(initialLocalStorageForm);
  const [files, setFiles] = useState(initialLocalStorageFiles);
  const [errors, setErrors] = useState({});
  let history = useHistory();
  const { post, isLoading } = useFetch();

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
    const initialCombinedForms = { ...initialForm, ...initialFileInputs };
    const combinedCurrentForms = { ...form, ...files };
    Object.keys(initialCombinedForms).forEach((key) => {
      if (combinedCurrentForms[key] === "") {
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

  const handleChangeFiles = ({ name, value }) => {
    setFiles({
      ...files,
      [name]: value,
    });
  };

  useEffect(() => {
    const saveFilesLocalStorage = () => {
      const filesData = JSON.stringify(files);
      localStorage.setItem("gspFiles", filesData);
    };
    saveFilesLocalStorage();
  }, [files]);

  const saveFormLocalStorage = () => {
    const formData = JSON.stringify(form);
    localStorage.setItem("gspForm", formData);
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

  const cleanForm = () => {
    console.error("LIMPIANDO");
    // Como no puedo actulizar el estado después de redirigir a otra pagina, actualizaré el localStorage
    localStorage.setItem("gspForm", JSON.stringify(initialForm));
    localStorage.setItem("gspFiles", JSON.stringify(initialFileInputs));
    // localStorage.removeItem("gspFiles");
  };

  const sendForm = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, ...files }),
    };
    fetch("http://localhost:8000/form", options)
      .then((response) =>
        !response.ok ? new Promise.reject("Algo salió mal") : response.json()
      )
      .then((json) => {
        console.log(json);
        if (json.status === "202") {
          cleanForm();
          history.push(routes.SUCCESS_PAGE);
        } else {
          alert("Algo no salió bien");
        }
      })
      .catch((error) => {
        // console.log(a);
        alert("Algo no salió bien ERRORES");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkAllAnswers()) alert("Llena todos los campos por favor.");
    else sendForm();
  };

  const handleBlur = (e) => {
    handleError(e);
    saveFormLocalStorage();
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
    handleChangeFiles,
    files,
  };
};
