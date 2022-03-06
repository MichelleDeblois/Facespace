import React from "react";
import styled from "styled-components";
const ErrorMessage = () => {
  return <Message> Oops this user does not have an account</Message>;
};

const Message = styled.div`
  color: red;
`;
export default ErrorMessage;
