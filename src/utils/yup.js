import * as yup from "yup";

const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const REGEX_ONLY_NUMBER = /^\d+$/;

yup.addMethod(yup.string, "password", function (message) {
  return this.matches(REGEX_PASSWORD, {
    message:
      "Your password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
    excludeEmptyString: true,
  });
});

yup.addMethod(yup.string, "onlyNumber", function (message) {
  return this.matches(REGEX_ONLY_NUMBER, {
    message: "This field can only contains number",
    excludeEmptyString: true,
  });
});

export default yup;
