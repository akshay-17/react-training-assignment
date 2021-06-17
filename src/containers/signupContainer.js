import React, { useReducer } from "react";
import Signup from "../components/signupComponent";
import * as yup from "yup";
import {
  initialState,
  reducer,
  dispatchWrapper,
} from "../reducers/signupReducer";
import { doSignup } from "../apis/loginApi";
const SignupContainer = (props) => {
  const [values, dispatch] = useReducer(reducer, initialState);
  const {
    email,
    fullName,
    password,
    userName,
    type,
    acceptedTerms,
    emailError,
    passwordError,
    fullNameError,
    userNameError,
    acceptedTermsError,
  } = values;

  const handleEmailChange = (e) => {
    dispatchWrapper(dispatch, "email", e.target.value);
  };
  const handlePassswordChange = (e) => {
    dispatchWrapper(dispatch, "password", e.target.value);
  };
  const handleFullNameChange = (e) => {
    dispatchWrapper(dispatch, "fullName", e.target.value);
  };
  const handleUserNameChange = (e) => {
    dispatchWrapper(dispatch, "userName", e.target.value);
  };
  const handleTypeChange = (e) => {
    dispatchWrapper(dispatch, "type", e.target.value);
  };
  const handleAcceptedTermsChange = (e) => {
    dispatchWrapper(dispatch, "acceptedTerms", e.target.checked);
  };
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    fullName: yup.string().required(),
    password: yup
      .string()
      .required("No password.")
      .min(5, "Min 6 character passsword"),
    userName: yup.string().required(),
    acceptedTerms: yup.boolean().isTrue(),
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatchWrapper(dispatch, "emailError", "");
    dispatchWrapper(dispatch, "passwordError", "");
    dispatchWrapper(dispatch, "fullNameError", "");
    dispatchWrapper(dispatch, "userNameError", "");
    dispatchWrapper(dispatch, "acceptedTermsError", "");
    schema
      .isValid({
        email: email,
        password: password,
        fullName: fullName,
        userName: userName,
        acceptedTerms: acceptedTerms,
      })
      .then(function (valid) {
        if (!valid) {
          schema
            .validate(
              {
                email: email,
                password: password,
                fullName: fullName,
                userName: userName,
                acceptedTerms: acceptedTerms,
              },
              { abortEarly: false }
            )
            .catch(function (error) {
              error.inner.forEach((e) => {
                if (e.path === "email") {
                  dispatchWrapper(dispatch, "emailError", e.message);
                } else if (e.path === "password") {
                  dispatchWrapper(dispatch, "passwordError", e.message);
                } else if (e.path === "fullName") {
                  dispatchWrapper(dispatch, "fullNameError", e.message);
                } else if (e.path === "userName") {
                  dispatchWrapper(dispatch, "userNameError", e.message);
                } else if (e.path === "acceptedTerms") {
                  dispatchWrapper(dispatch, "acceptedTermsError", e.message);
                } else {
                  alert(error);
                }
              });
            });
        } else {
          // console.log("Inside else");
          doSignup(email, fullName, password, userName)
            .then((resp) => {
              console.log(resp);
              props.history.push("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div>
      <Signup
        onSubmitHandler={onSubmitHandler}
        handlePassswordChange={handlePassswordChange}
        handleEmailChange={handleEmailChange}
        handleFullNameChange={handleFullNameChange}
        handleUserNameChange={handleUserNameChange}
        handleTypeChange={handleTypeChange}
        handleAcceptedTermsChange={handleAcceptedTermsChange}
        email={email}
        fullName={fullName}
        password={password}
        userName={userName}
        type={type}
        acceptedTerms={acceptedTerms}
        emailError={emailError}
        passwordError={passwordError}
        fullNameError={fullNameError}
        userNameError={userNameError}
        acceptedTermsError={acceptedTermsError}
      />
    </div>
  );
};

export default SignupContainer;
