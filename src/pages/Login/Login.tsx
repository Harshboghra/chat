// src/LoginForm.tsx
import React, { useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "primereact/button";
import { Input, ErrorMessage } from "../../component/Form";
import { useUserContext } from "../../context/UserContext";
import authService from "../../service/auth/auth.service";
import userService from "../../service/user/user.service";
import { Toast } from "primereact/toast";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const LoginForm = () => {
  const { login: setLogin } = useUserContext();
  const toast = useRef<Toast | any>(null);
  const initialValues = {
    email: "",
    password: "",
    id: 1,
  };

  const handleLogin = async (values: any) => {
    try {
      const token = await authService.login(values);
      localStorage.setItem("token", token.token);
      window.location.pathname = "/";
    } catch (error: any) {
      toast.current.show({
        severity: "error",
        summary: "Login Error",
        detail:
          error.response.data.message ||
          "An error occurred during login. Please try again.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" />
            </div>
            <Button
              label="Login"
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md"
            />
          </Form>
        </Formik>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default LoginForm;
