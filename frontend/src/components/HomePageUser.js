import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePageUser = ({ avatar, id, userFriends }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${id}`);
  };
  const found = userFriends.find((friend) => {
    return friend === id;
  });
  return (
    <Wrapper>
      <Link to={`/profile/${id}`}>
        <Img
          src={avatar}
          style={{ border: found ? "solid #FFF8B5 5px" : "none" }}
          onClick={handleClick}
        ></Img>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: block;
  flex-wrap: wrap; */
`;
const Img = styled.img`
  width: auto;
  height: 150px;
  border-radius: 50%;
  margin-left: 10px;
  &:hover {
    transform: scale(1.5, 1.5);
  }
`;
export default HomePageUser;
