import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
const SignInPage = ({ setSignInName, setUserFriends }) => {
  let navigate = useNavigate();
  const [nameSignIn, setNameSignIn] = useState("");
  const [isSignedIn, setIsSignedIn] = useState("");
  const handleChange = (e) => {
    setNameSignIn(e.target.value);
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    fetch("/api/users/")
      .then((res) => res.json())
      .then((data) => {
        const found = data.data.find((user) => {
          return user.name.toLowerCase() === nameSignIn.toLocaleLowerCase();
        });
        if (found) {
          setSignInName(found);
          setUserFriends(found.friends);

          setIsSignedIn("success");
          navigate("/");
        } else {
          setIsSignedIn("error");
        }
      });
  };
  return (
    <>
      <Container>
        <form>
          <label>
            <Input onChange={handleChange} name="name" />
          </label>

          <Button onClick={handleSignIn} type="submit">
            Sign In
          </Button>
          {isSignedIn === "error" && <ErrorMessage />}
        </form>
      </Container>
      <Img src="images/Gossip.png"></Img>
    </>
  );
};

const Button = styled.button`
  height: 50px;
  background-color: black;
  border: none;
  color: #fff8b5;
  font-size: 25px;
`;
const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 350px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;

export default SignInPage;
