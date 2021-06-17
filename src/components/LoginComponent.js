import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  FormFeedback,
  FormGroup,
} from "reactstrap";

function LoginComponent(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    email,
    password,
    emailError,
    passwordError,
  } = props;
  return (
    <div className="border flex w-100">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Enter Your Email</Label>
          <Input
            invalid={emailError !== ""}
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="someone@domain.com"
            value={email}
            onChange={handleEmailChange}
          />
          <FormFeedback>{emailError}</FormFeedback>
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            invalid={passwordError !== ""}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
          <FormFeedback>{passwordError}</FormFeedback>
        </FormGroup>
        <FormGroup className="mt-2">
          <Button type="submit">Login</Button>
        </FormGroup>
        Don't have an account? <Link to="/signup">Signup Here</Link>
      </Form>
    </div>
  );
}

export default LoginComponent;
