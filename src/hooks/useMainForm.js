import { useEffect, useState } from "react";
import { generate } from "shortid";
import { uncompletedFormModalMessage } from "../helpers/messages/messagesApp";
import messagesStatusCode from "../helpers/messages/messagesStatusCode";

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

const initialFiles = {
  personalInfoPhoto: "",
};

const initialLocalStorageFiles = localStorage.getItem("gspFiles")
  ? JSON.parse(localStorage.getItem("gspFiles"))
  : initialFiles;

export const useMainForm = () => {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState(initialLocalStorageFiles);
  const [errors, setErrors] = useState({});
  const { post, isLoading } = useFetch();
  const [infoModal, setInfoModal] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

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
    const initialCombinedForms = { ...initialForm, ...initialFiles };
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

  const loadFilesFromStorage = () => {
    const localFiles = localStorage.getItem("gspFiles")
      ? JSON.parse(localStorage.getItem("gspFiles"))
      : initialFiles;
    setFiles(localFiles);
  };

  useEffect(() => {
    loadFilesFromStorage();
    loadFormFromStorage();
  }, []);

  const saveFilesLocalStorage = () => {
    const filesData = JSON.stringify(files);
    localStorage.setItem("gspFiles", filesData);
  };

  useEffect(() => {
    saveFilesLocalStorage();
  }, [files]);

  const loadFormFromStorage = () => {
    const localForm = localStorage.getItem("gspForm")
      ? JSON.parse(localStorage.getItem("gspForm"))
      : initialForm;
    setForm(localForm);
  };

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
    localStorage.setItem("gspForm", JSON.stringify(initialForm));
    localStorage.setItem("gspFiles", JSON.stringify(initialFiles));

    setForm(initialForm);
    setFiles(initialFiles);
  };

  const sendForm = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { ...form, ...files },
    };

    const response = await post(
      "https://backend-gsp.herokuapp.com/form",
      options
    );

    if (response) {
      if (response.status === "202") {
        openModal(messagesStatusCode[201]);
        cleanForm();
      }
    } else {
      openModal(messagesStatusCode[99999]);
    }

    console.log(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    openModal(messagesStatusCode[201]);
  };

  const handleBlur = (e) => {
    handleError(e);
    saveFormLocalStorage();
  };

  const closeModal = () => setIsOpenModal(false);
  const openModal = (message) => {
    setInfoModal(message);
    setIsOpenModal(true);
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
    isLoading,
    infoModal,
    isOpenModal,
    closeModal,
    openModal,
  };
};
