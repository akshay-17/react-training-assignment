import { axiosClient } from "./apiHelper.js";

export const doLogin = ({ email, password }) => {
  return axiosClient("POST", "auth", {
    username: email,
    password,
    type: "normal",
  });
};
export const doSignup = (email, fullname, password, username) => {
  return axiosClient("POST", "auth/register", {
    email,
    password,
    full_name: fullname,
    username,
    type: "public",
    accepted_terms: true,
  });
};
