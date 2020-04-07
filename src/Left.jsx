import React from "react";
import styled from "styled-components";

const StyledLeft = styled.div`
  width: 35%;
  background: linear-gradient(to right, #01a9ac, #01dbdf);
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
`;
const StyledImg = styled.img`
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Left = () => {
  return (
    <StyledLeft>
      {/* <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" /> */}
      <StyledImg src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" />
      <h4>Alex William</h4>
      <p>UI Developer</p>
    </StyledLeft>
  );
};

export default Left;
