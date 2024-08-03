import React from "react";
import styled from "styled-components";
import { BsBagCheck } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { TbClipboardCheck } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { RiAppsFill } from "react-icons/ri";
const SidebarContainer = styled.div`
  // width: 20%;
  background: #202028;
  min-height: 115vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarItem = styled.div`
  color: #fff;
  margin: 15px 0;
  font-size: 22px;

  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  hight: 30px;
  // width: 30px;
`;

const SidebarItem1 = styled.div`
  color: #7195f4;
  font-size: 22px;
  margin: 15px 0;

`;

const SidebarItemLogOut = styled.div`
  color: #fff;
  margin-top: 390px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 22px;


  &:hover {
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem1>
        <Icon>
          <RiAppsFill />
        </Icon>
      </SidebarItem1>
      <SidebarItem1>
        <Icon>
          <AiFillHome />
        </Icon>
      </SidebarItem1>
      <SidebarItem>
        <Icon>
          <BiBarChartSquare />
        </Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon>
          <TbClipboardCheck />
        </Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon>
          <CiWallet />
        </Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon>
          <BsBagCheck />
        </Icon>
      </SidebarItem>
      <SidebarItemLogOut>
        <Icon>
          <AiOutlineLogout />
        </Icon>
      </SidebarItemLogOut>
    </SidebarContainer>
  );
};

export default Sidebar;
