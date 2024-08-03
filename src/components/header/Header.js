import React from "react";
import styled from "styled-components";
import { FaBell, FaEnvelope } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const HeaderContainer = styled.header`
  background: #202028;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: 10px;
  color: gray;
`;

const SearchBar = styled.input`
  padding: 10px 10px 10px 40px;  /* Adjust padding to make space for the icon */
  border-radius: 5px;
  border: none;
  width: 300px;
  background: #2a2b30;
  color: #b0b1b5;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled.div`
  padding: 10px;
  border-radius: 50%;
  background: #45454d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchWrapper>
        <SearchIcon size={20} />
        <SearchBar placeholder="Search..." />
      </SearchWrapper>
      <Icons>
        <IconWrapper>
          <FaEnvelope />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineSetting />
        </IconWrapper>
        <IconWrapper>
          <FaBell />
        </IconWrapper>
        <UserImage
          src="https://tse4.mm.bing.net/th?id=OIP.T6Ea_g7kHwVoE9mRHhjbQwHaJQ&pid=Api&P=0&h=180"
          alt="User"
        />
      </Icons>
    </HeaderContainer>
  );
};

export default Header;
