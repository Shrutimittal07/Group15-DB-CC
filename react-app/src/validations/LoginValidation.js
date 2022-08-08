import { ValidationEnum } from "../config/enums/ValidationEnum";

export const LoginValidation = {
  email: [
    {
      type: ValidationEnum.REQUIRED,
      message: "Email is required.",
    },
    {
      type: ValidationEnum.PATTERN,
      value:
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid email.",
    },
  ],
  password: [
    {
      type: ValidationEnum.REQUIRED,
      message: "Password is required.",
    },
  ],
};
