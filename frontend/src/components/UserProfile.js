import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FriendsList from "./FriendsList";
import styled from "styled-components";
const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      });
  }, [id]);

  if (!user) {
    return <div>loading</div>;
  }

  const friends = user.friends.map((friend, index) => {
    return <FriendsList key={index} friends={friend}></FriendsList>;
  });
  return (
    <>
      <Name>{user.name}</Name>
      <ImgContainer>
        <Img src={user.avatarUrl}></Img>
      </ImgContainer>
      <P>{user.name}'s friends</P>
      <Container>
        <Friend>{friends}</Friend>
      </Container>
    </>
  );
};

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Friend = styled.div`
  display: flex;
  margin-top: 15px;
`;
const P = styled.p`
  color: white;
  font-size: 35px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-bottom: solid 1px;
`;
const Img = styled.img`
  height: 400px;
  border-radius: 50%;
`;
const Name = styled.span`
  border-bottom: solid 1px;
  color: white;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: flex;
  justify-content: center;
`;
export default UserProfile;
