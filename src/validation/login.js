import * as Yup from "yup";

const validationLogin = Yup.object({
  username: Yup.string().required("userename is required"),
  password: Yup.string().required("password is required"),
});
export default validationLogin;
