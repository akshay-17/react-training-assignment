export const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  loginError: "",
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
    case "emailError":
      return { ...state, emailError: payload };
    case "passwordError":
      return { ...state, passwordError: payload };
    case "loginError":
      return { ...state, loginError: payload };
    default:
      return state;
  }
};
