import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router";
import styled from "styled-components";

const FriendsList = ({ friends }) => {
  let navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${friends}`)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data.data);
      });
  }, [friends]);

  if (!friend) {
    return <div>loading</div>;
  }

  const handleClick = () => {
    navigate(`/profile/${friends}`);
  };
  return (
    <>
      <div onClick={handleClick}>
        <Friend src={friend.avatarUrl}></Friend>
        <Name>{friend.name}</Name>
      </div>
    </>
  );
};

const Name = styled.span`
  color: white;
  display: flex;
  justify-content: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Friend = styled.img`
  display: flex;
  width: auto;
  height: 150px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5, 1.5);
  }
`;
export default FriendsList;
