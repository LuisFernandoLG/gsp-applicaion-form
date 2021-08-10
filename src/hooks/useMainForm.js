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

  const handleError = (e) => {};

  const checkAllAnswers = () => {
    const combinedCurrentForms = { ...form, ...files };

    const nameRegex =
      /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`' -]+$/;
    const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const numbersRegex = /^\d+$/;
    const phoneNumberRegex = /^\d{10}$/;
    const gradesRegex = /^(?:100|\d{1,2})(?:\.\d{1,2})?$/;
    const requiredFieldMessage = "Campo necesario";
    const invalidFieldMessage = "Campo invalido";

    const formErrors = {};
    formErrors.personalInfo = 0;
    formErrors.fatherInfo = 0;
    formErrors.motherInfo = 0;
    formErrors.academicBackground = 0;
    formErrors.economicStatus = 0;

    formErrors.signAcceptSection = 0;

    if (combinedCurrentForms.personalInfoName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.personalInfoName))
        formErrors.personalInfoName = false;
      else {
        formErrors.personalInfoName = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoName = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoLastName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.personalInfoLastName))
        formErrors.personalInfoLastName = false;
      else {
        formErrors.personalInfoLastName = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoLastName = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoSecondLastName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.personalInfoSecondLastName))
        formErrors.personalInfoSecondLastName = false;
      else {
        formErrors.personalInfoSecondLastName = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoSecondLastName = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoBday.trim() !== "") {
      if (dateRegex.test(combinedCurrentForms.personalInfoBday))
        formErrors.personalInfoBday = false;
      else {
        formErrors.personalInfoBday = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoBday = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoGender.trim() !== "") {
      formErrors.personalInfoGender = false;
    } else {
      formErrors.personalInfoGender = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoSpeakEnglish.trim() !== "") {
      formErrors.personalInfoSpeakEnglish = false;
    } else {
      formErrors.personalInfoSpeakEnglish = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoPhoto.trim() !== "") {
      formErrors.personalInfoPhoto = false;
    } else {
      formErrors.personalInfoPhoto = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoEmail.trim() !== "") {
      if (emailRegex.test(combinedCurrentForms.personalInfoEmail))
        formErrors.personalInfoEmail = false;
      else {
        formErrors.personalInfoEmail = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoEmail = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoPhone.trim() !== "") {
      if (phoneNumberRegex.test(combinedCurrentForms.personalInfoPhone))
        formErrors.personalInfoPhone = false;
      else {
        formErrors.personalInfoPhone = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoPhone = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoPhone2.trim() !== "") {
      if (phoneNumberRegex.test(combinedCurrentForms.personalInfoPhone2))
        formErrors.personalInfoPhone2 = false;
      else {
        formErrors.personalInfoPhone2 = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoPhone2 = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoCity.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.personalInfoCity))
        formErrors.personalInfoCity = false;
      else {
        formErrors.personalInfoCity = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoCity = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoSuburban.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.personalInfoSuburban))
        formErrors.personalInfoSuburban = false;
      else {
        formErrors.personalInfoSuburban = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoSuburban = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoStreet.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.personalInfoStreet))
        formErrors.personalInfoStreet = false;
      else {
        formErrors.personalInfoStreet = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoStreet = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    if (combinedCurrentForms.personalInfoCP.trim() !== "") {
      if (numbersRegex.test(combinedCurrentForms.personalInfoCP))
        formErrors.personalInfoCP = false;
      else {
        formErrors.personalInfoCP = invalidFieldMessage;
        formErrors.personalInfo += 1;
      }
    } else {
      formErrors.personalInfoCP = requiredFieldMessage;
      formErrors.personalInfo += 1;
    }

    // Father section ------------------------------------------------------

    if (combinedCurrentForms.fatherInfoName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.fatherInfoName))
        formErrors.fatherInfoName = false;
      else {
        formErrors.fatherInfoName = invalidFieldMessage;
        formErrors.fatherInfo += 1;
      }
    } else {
      formErrors.fatherInfoName = requiredFieldMessage;
      formErrors.fatherInfo += 1;
    }

    if (combinedCurrentForms.fatherInfoLastName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.fatherInfoLastName))
        formErrors.fatherInfoLastName = false;
      else {
        formErrors.fatherInfoLastName = invalidFieldMessage;
        formErrors.fatherInfo += 1;
      }
    } else {
      formErrors.fatherInfoLastName = requiredFieldMessage;
      formErrors.fatherInfo += 1;
    }

    if (combinedCurrentForms.fatherInfoSecondLastName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.fatherInfoSecondLastName))
        formErrors.fatherInfoSecondLastName = false;
      else {
        formErrors.fatherInfoSecondLastName = invalidFieldMessage;
        formErrors.fatherInfo += 1;
      }
    } else {
      formErrors.fatherInfoSecondLastName = requiredFieldMessage;
      formErrors.fatherInfo += 1;
    }

    if (combinedCurrentForms.fatherInfoSecondLastJob.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.fatherInfoSecondLastJob))
        formErrors.fatherInfoSecondLastJob = false;
      else {
        formErrors.fatherInfoSecondLastJob = invalidFieldMessage;
        formErrors.fatherInfo += 1;
      }
    } else {
      formErrors.fatherInfoSecondLastJob = requiredFieldMessage;
      formErrors.fatherInfo += 1;
    }

    if (combinedCurrentForms.fatherInfoSecondFormalIncome.trim() !== "") {
      if (numbersRegex.test(combinedCurrentForms.fatherInfoSecondFormalIncome))
        formErrors.fatherInfoSecondFormalIncome = false;
      else {
        formErrors.fatherInfoSecondFormalIncome = invalidFieldMessage;
        formErrors.fatherInfo += 1;
      }
    } else {
      formErrors.fatherInfoSecondFormalIncome = requiredFieldMessage;
      formErrors.fatherInfo += 1;
    }

    if (combinedCurrentForms.fatherInfoSecondInformalIncome.trim() !== "") {
      if (
        numbersRegex.test(combinedCurrentForms.fatherInfoSecondInformalIncome)
      )
        formErrors.fatherInfoSecondInformalIncome = false;
      else {
        formErrors.fatherInfoSecondInformalIncome = invalidFieldMessage;
        formErrors.fatherInfo += 1;
      }
    } else {
      formErrors.fatherInfoSecondInformalIncome = requiredFieldMessage;
      formErrors.fatherInfo += 1;
    }

    // Mother section ------------------------------------------------------

    if (combinedCurrentForms.motherInfoName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.motherInfoName))
        formErrors.motherInfoName = false;
      else {
        formErrors.motherInfoName = invalidFieldMessage;
        formErrors.motherInfo += 1;
      }
    } else {
      formErrors.motherInfoName = requiredFieldMessage;
      formErrors.motherInfo += 1;
    }

    if (combinedCurrentForms.motherInfoLastName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.motherInfoLastName))
        formErrors.motherInfoLastName = false;
      else {
        formErrors.motherInfoLastName = invalidFieldMessage;
        formErrors.motherInfo += 1;
      }
    } else {
      formErrors.motherInfoLastName = requiredFieldMessage;
      formErrors.motherInfo += 1;
    }

    if (combinedCurrentForms.motherInfoSecondLastName.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.motherInfoSecondLastName))
        formErrors.motherInfoSecondLastName = false;
      else {
        formErrors.motherInfoSecondLastName = invalidFieldMessage;
        formErrors.motherInfo += 1;
      }
    } else {
      formErrors.motherInfoSecondLastName = requiredFieldMessage;
      formErrors.motherInfo += 1;
    }

    if (combinedCurrentForms.motherInfoSecondLastJob.trim() !== "") {
      if (nameRegex.test(combinedCurrentForms.motherInfoSecondLastJob))
        formErrors.motherInfoSecondLastJob = false;
      else {
        formErrors.motherInfoSecondLastJob = invalidFieldMessage;
        formErrors.motherInfo += 1;
      }
    } else {
      formErrors.motherInfoSecondLastJob = requiredFieldMessage;
      formErrors.motherInfo += 1;
    }

    if (combinedCurrentForms.motherInfoSecondFormalIncome.trim() !== "") {
      if (numbersRegex.test(combinedCurrentForms.motherInfoSecondFormalIncome))
        formErrors.motherInfoSecondFormalIncome = false;
      else {
        formErrors.motherInfoSecondFormalIncome = invalidFieldMessage;
        formErrors.motherInfo += 1;
      }
    } else {
      formErrors.motherInfoSecondFormalIncome = requiredFieldMessage;
      formErrors.motherInfo += 1;
    }

    if (combinedCurrentForms.motherInfoSecondInformalIncome.trim() !== "") {
      if (
        numbersRegex.test(combinedCurrentForms.motherInfoSecondInformalIncome)
      )
        formErrors.motherInfoSecondInformalIncome = false;
      else {
        formErrors.motherInfoSecondInformalIncome = invalidFieldMessage;
        formErrors.motherInfo += 1;
      }
    } else {
      formErrors.motherInfoSecondInformalIncome = requiredFieldMessage;
      formErrors.motherInfo += 1;
    }

    // academicBackgroundSecondarySchool ---------------------------------------------------------

    if (
      combinedCurrentForms.academicBackgroundSecondarySchoolName.trim() !== ""
    ) {
      // if (
      //   nameRegex.test(
      //     combinedCurrentForms.academicBackgroundSecondarySchoolName
      //   )
      // )
      formErrors.academicBackgroundSecondarySchoolName = false;
      // else {
      //   formErrors.academicBackgroundSecondarySchoolName = invalidFieldMessage;
      //   formErrors.academicBackground += 1;
      // }
    } else {
      formErrors.academicBackgroundSecondarySchoolName = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    if (
      combinedCurrentForms.academicBackgroundSecondarySchoolGrades.trim() !== ""
    ) {
      if (
        gradesRegex.test(
          combinedCurrentForms.academicBackgroundSecondarySchoolGrades
        )
      )
        formErrors.academicBackgroundSecondarySchoolGrades = false;
      else {
        formErrors.academicBackgroundSecondarySchoolGrades =
          invalidFieldMessage;
        formErrors.academicBackground += 1;
      }
    } else {
      formErrors.academicBackgroundSecondarySchoolGrades = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    if (
      combinedCurrentForms.academicBackgroundSecondarySchoolYears.trim() !== ""
    ) {
      if (
        numbersRegex.test(
          combinedCurrentForms.academicBackgroundSecondarySchoolYears
        )
      )
        formErrors.academicBackgroundSecondarySchoolYears = false;
      else {
        formErrors.academicBackgroundSecondarySchoolYears = invalidFieldMessage;
        formErrors.academicBackground += 1;
      }
    } else {
      formErrors.academicBackgroundSecondarySchoolYears = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    if (
      combinedCurrentForms.academicBackgroundSecondarySchoolAddress.trim() !==
      ""
    ) {
      // if (
      //   nameRegex.test(
      //     combinedCurrentForms.academicBackgroundSecondarySchoolAddress
      //   )
      // )
      formErrors.academicBackgroundSecondarySchoolAddress = false;
      // else {
      //   formErrors.academicBackgroundSecondarySchoolAddress =
      //     invalidFieldMessage;
      //   formErrors.academicBackground += 1;
      // }
    } else {
      formErrors.academicBackgroundSecondarySchoolAddress =
        requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    // academicBackgroundHighySchool

    if (combinedCurrentForms.academicBackgroundHighySchoolName.trim() !== "") {
      // if (
      //   nameRegex.test(combinedCurrentForms.academicBackgroundHighySchoolName)
      // )
      formErrors.academicBackgroundHighySchoolName = false;
      // else {
      //   formErrors.academicBackgroundHighySchoolName = invalidFieldMessage;
      //   formErrors.academicBackground += 1;
      // }
    } else {
      formErrors.academicBackgroundHighySchoolName = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    if (
      combinedCurrentForms.academicBackgroundHighySchoolGrades.trim() !== ""
    ) {
      if (
        gradesRegex.test(
          combinedCurrentForms.academicBackgroundHighySchoolGrades
        )
      )
        formErrors.academicBackgroundHighySchoolGrades = false;
      else {
        formErrors.academicBackgroundHighySchoolGrades = invalidFieldMessage;
        formErrors.academicBackground += 1;
      }
    } else {
      formErrors.academicBackgroundHighySchoolGrades = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    if (combinedCurrentForms.academicBackgroundHighySchoolYears.trim() !== "") {
      if (
        numbersRegex.test(
          combinedCurrentForms.academicBackgroundHighySchoolYears
        )
      )
        formErrors.academicBackgroundHighySchoolYears = false;
      else {
        formErrors.academicBackgroundHighySchoolYears = invalidFieldMessage;
        formErrors.academicBackground += 1;
      }
    } else {
      formErrors.academicBackgroundHighySchoolYears = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    if (
      combinedCurrentForms.academicBackgroundHighySchoolAddress.trim() !== ""
    ) {
      // if (
      //   nameRegex.test(
      //     combinedCurrentForms.academicBackgroundHighySchoolAddress
      //   )
      // )
      formErrors.academicBackgroundHighySchoolAddress = false;
      // else {
      //   formErrors.academicBackgroundHighySchoolAddress = invalidFieldMessage;
      //   formErrors.academicBackground += 1;
      // }
    } else {
      formErrors.academicBackgroundHighySchoolAddress = requiredFieldMessage;
      formErrors.academicBackground += 1;
    }

    // economicStatus

    if (
      combinedCurrentForms.economicStatusNumOfPeopleLivingAtHome.trim() !== ""
    ) {
      if (
        numbersRegex.test(
          combinedCurrentForms.economicStatusNumOfPeopleLivingAtHome
        )
      )
        formErrors.economicStatusNumOfPeopleLivingAtHome = false;
      else {
        formErrors.economicStatusNumOfPeopleLivingAtHome = invalidFieldMessage;
        formErrors.economicStatus += 1;
      }
    } else {
      formErrors.economicStatusNumOfPeopleLivingAtHome = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusNumOfMembersFamily.trim() !== "") {
      if (
        numbersRegex.test(combinedCurrentForms.economicStatusNumOfMembersFamily)
      )
        formErrors.economicStatusNumOfMembersFamily = false;
      else {
        formErrors.economicStatusNumOfMembersFamily = invalidFieldMessage;
        formErrors.economicStatus += 1;
      }
    } else {
      formErrors.economicStatusNumOfMembersFamily = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusHasOwnHouse.trim() !== "") {
      formErrors.economicStatusHasOwnHouse = false;
    } else {
      formErrors.economicStatusHasOwnHouse = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusHasCar.trim() !== "") {
      formErrors.economicStatusHasCar = false;
    } else {
      formErrors.economicStatusHasCar = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusHasBankAccount.trim() !== "") {
      formErrors.economicStatusHasBankAccount = false;
    } else {
      formErrors.economicStatusHasBankAccount = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusHasInternet.trim() !== "") {
      formErrors.economicStatusHasInternet = false;
    } else {
      formErrors.economicStatusHasInternet = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusHasJob.trim() !== "") {
      formErrors.economicStatusHasJob = false;
    } else {
      formErrors.economicStatusHasJob = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    if (combinedCurrentForms.economicStatusTimeLivingCabo.trim() !== "") {
      // if (numbersRegex.test(combinedCurrentForms.economicStatusTimeLivingCabo))
      formErrors.economicStatusTimeLivingCabo = false;
      // else {
      //   formErrors.economicStatusTimeLivingCabo = invalidFieldMessage;
      //   formErrors.economicStatus += 1;
      // }
    } else {
      formErrors.economicStatusTimeLivingCabo = requiredFieldMessage;
      formErrors.economicStatus += 1;
    }

    // Sign section
    if (combinedCurrentForms.signAccept.trim() !== "") {
      formErrors.signAccept = false;
    } else {
      formErrors.signAccept = requiredFieldMessage;
      formErrors.signAcceptSection += 1;
    }

    if (combinedCurrentForms.signAcceptPublicImage.trim() !== "") {
      formErrors.signAcceptPublicImage = false;
    } else {
      formErrors.signAcceptPublicImage = requiredFieldMessage;
      formErrors.signAcceptSection += 1;
    }

    setErrors(formErrors);

    if (
      formErrors.personalInfo +
        formErrors.fatherInfo +
        formErrors.motherInfo +
        formErrors.academicBackground +
        formErrors.signAcceptSection ===
      0
    ) {
      return true;
    } else {
      return false;
    }
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
      if (response.status === "201") {
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
    if (!checkAllAnswers()) return openModal(uncompletedFormModalMessage);

    sendForm();
  };

  const handleBlur = (e) => {
    // handleError(e);
    checkAllAnswers();
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
