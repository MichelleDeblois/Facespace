import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import UserProfile from "./UserProfile";

const App = () => {
  const [signInName, setSignInName] = useState("");
  const [userFriends, setUserFriends] = useState([]);
  console.log(userFriends);
  return (
    <Router>
      <GlobalStyles />
      <div>
        <Container>
          <Link to="/">
            <h2>xoxo Gossip Girl</h2>
          </Link>
          <Link
            to={signInName !== "" ? `/profile/${signInName.id}` : "/sign-in"}
          >
            <SignIn>{signInName !== "" ? signInName.name : "Sign in!!"}</SignIn>
          </Link>
        </Container>
        <Routes>
          <Route path="/profile/:id" exact element={<UserProfile />}></Route>
          <Route
            path="/sign-in"
            element={
              <SignInPage
                signInName={signInName}
                setSignInName={setSignInName}
                setUserFriends={setUserFriends}
              />
            }
          >
            Sign in
          </Route>
          <Route
            path="/"
            exact
            element={<HomePage userFriends={userFriends} />}
          >
            Homepage
          </Route>

          <Route path="/page-1">Page 1</Route>
        </Routes>
      </div>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  text-decoration: none;
`;
const SignIn = styled.h3``;
export default App;
