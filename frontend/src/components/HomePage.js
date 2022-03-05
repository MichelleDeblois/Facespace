import React, { useState } from "react";
import HomePageUser from "./HomePageUser";
import { useEffect } from "react";
import styled from "styled-components";
const HomePage = ({ userFriends }) => {
  const [home, setHome] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setHome(data.data);
  }, []);
  if (!home) {
    return <div>loading</div>;
  }
  console.log("friend", userFriends);
  const homePageUser = home.map((user) => {
    return (
      <HomePageUser
        key={user.id}
        id={user.id}
        name={user.name}
        avatar={user.avatarUrl}
        userFriends={userFriends}
      ></HomePageUser>
    );
  });
  return (
    <>
      <Title>Hey Upper East Siders</Title>
      <Background src="images/Gossip.png"></Background>
      <Container>
        <Img>{homePageUser}</Img>
      </Container>
    </>
  );
};
const Background = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  top: 10vh;
  background-color: black;
`;

const Img = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 15vh;
  left: 0;
`;
export default HomePage;
