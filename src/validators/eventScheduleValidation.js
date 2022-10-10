import * as yup from "yup";

export const createScheduleValidation = () =>
  yup.object().shape({
    title: yup.string().required("Title is required."),
  });
  
