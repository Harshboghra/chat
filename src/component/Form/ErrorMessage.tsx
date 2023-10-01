import React from "react";
import { ErrorMessage as Message } from "formik";

interface ErrorMessageProps {
  name?: string;
  component?: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  name = "text",
  component = "div",
  className = "text-red-500",
}) => {
  return <Message name={name} component={component} className={className} />;
};

export default ErrorMessage;
