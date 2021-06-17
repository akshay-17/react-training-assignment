import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const Signup = (props) => {
  const {
    handleEmailChange,
    handleFullNameChange,
    handleUserNameChange,
    onSubmitHandler,
    handlePassswordChange,

    handleAcceptedTermsChange,
    email,
    fullName,
    password,
    userName,
    acceptedTerms,
    emailError,
    passwordError,
    fullNameError,
    userNameError,
    acceptedTermsError,
  } = props;
  return (
    <div className="border flex">
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            invalid={emailError !== ""}
            type="text"
            name="email"
            id="someone@domain.com"
            placeholder="with a placeholder"
            value={email}
            onChange={handleEmailChange}
          />
          <FormFeedback>{emailError}</FormFeedback>
          <br />
        </FormGroup>
        <FormGroup>
          <Label>Fullname</Label>
          <Input
            invalid={fullNameError !== ""}
            type="text"
            name="fullname"
            placeholder="michael jon "
            value={fullName}
            onChange={handleFullNameChange}
          />
          <FormFeedback>{fullNameError}</FormFeedback> <br />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            invalid={passwordError !== ""}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            value={password}
            onChange={handlePassswordChange}
          />
          <FormFeedback>{passwordError}</FormFeedback> <br />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Username</Label>
          <Input
            invalid={userNameError !== ""}
            type="text"
            name="text"
            placeholder="username placeholder"
            id="michael@9089"
            value={userName}
            onChange={handleUserNameChange}
          />
          <FormFeedback>{userNameError}</FormFeedback>
        </FormGroup>{" "}
        <br />
        <FormGroup>
          <Label check>
            <Input
              invalid={acceptedTermsError !== true}
              type="checkbox"
              value={acceptedTerms}
              onChange={handleAcceptedTermsChange}
            />{" "}
            Accepted Terms
          </Label>
          <FormFeedback>{acceptedTermsError}</FormFeedback> <br />
        </FormGroup>
        <FormGroup className="mt-2">
          <Button type="submit">Signup</Button>
        </FormGroup>{" "}
        <br />
        Have an account? <Link to="/login">Login</Link>
      </Form>
    </div>
  );
};

export default Signup;
