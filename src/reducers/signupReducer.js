export const initialState = {
  email: "",
  fullName: "",
  password: "",
  userName: "",
  type: "",
  acceptedTerms: false,
  emailError: "",
  passwordError: "",
  fullNameError: "",
  userNameError: "",
  acceptedTermsError: "",
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "email":
      return { ...state, email: payload };
    case "fullName":
      return { ...state, fullName: payload };
    case "password":
      return { ...state, password: payload };
    case "userName":
      return { ...state, userName: payload };
    case "type":
      return { ...state, type: payload };
    case "acceptedTerms":
      return { ...state, acceptedTerms: payload };
    case "emailError":
      return { ...state, emailError: payload };
    case "passwordError":
      return { ...state, passwordError: payload };
    case "fullNameError":
      return { ...state, fullNameError: payload };
    case "userNameError":
      return { ...state, userNameError: payload };
    case "acceptedTermsError":
      return { ...state, acceptedTermsError: payload };
    default:
      return state;
  }
};

export const dispatchWrapper = (dispatch, type_t, payload_p) => {
  dispatch({ type: type_t, payload: payload_p });
};
