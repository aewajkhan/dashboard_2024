import React from "react";
import Card from "../card/Card";
import Chart from "../chart/Chart";
import OrdersTable from "../orderTable/OrdersTable";
import FeedbackTable from "../feedbackTable/FeedbackTable";
import "./Dashboard.css";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFocus3Line } from "react-icons/ri";
import { LiaHamburgerSolid } from "react-icons/lia";
import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
} from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";
import ProfitCard from "../profileCard/ProfitCard";

const Dashboard = () => {
  const cardData = [
    {
      title: "Total Orders",
      value: "75",
      change: "3%",
      changeColor: "green",
      icon: <TbShoppingBagPlus />,
      backgroundColor: "#7195f4",
      color: "#405efa",
    },
    {
      title: "Total Delivered",
      value: "70",
      change: "3%",
      changeColor: "red",
      icon: <TbShoppingBagCheck />,
      backgroundColor: "#08805f",
      color: "#02c68b",
    },
    {
      title: "Total Cancelled",
      value: "05",
      change: "3%",
      changeColor: "green",
      icon: <TbShoppingBagX />,
      backgroundColor: "#592c49",
      color: "#f15b5c",
    },
    {
      title: "Total Revenue",
      value: "$12k",
      change: "3%",
      changeColor: "red",
      icon: <LuArrowDownUp />,
      backgroundColor: "#5a2d4a",
      color: "#d64296",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-row">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            change={card.change}
            changeColor={card.changeColor}
            icon={card.icon}
            backgroundColor={card.backgroundColor}
            color={card.color}
          />
        ))}
        <ProfitCard
          title="Net Profit"
          value="$6759.25"
          change="3%"
          className="profit-card"
          backgroundColor={"#7195f4"}
          progress="70"
          goal="Goal Commpleted"
        />
      </div>
      <div className="dashboard-body">
        <div className="dash1">
          <div className="activity-chart">
            <Chart />
          </div>
        </div>
        <div className="dash2">
          <div className="sidebar-container">
            <div className="sidebar-item">
              <div className="goal-div">
                <div className="logo1">
                  <RiFocus3Line />
                </div>
                <h3>Goals</h3>
              </div>
              <div className="arrow">
                <MdArrowForwardIos />
              </div>
            </div>
            <div className="sidebar-item">
              <div className="goal-div">
                <div className="logo2">
                  <LiaHamburgerSolid />
                </div>
                <h3>Popular Dishes</h3>
              </div>
              <div className="arrow">
                <MdArrowForwardIos />
              </div>
            </div>
            <div className="sidebar-item">
              <div className="goal-div">
                <div className="logo3">
                  <RiFocus3Line />
                </div>
                <h3>Menus</h3>
              </div>
              <div className="arrow">
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
        <div className="dash3">
          <OrdersTable title="Recent Orders" />
        </div>
        <div className="dash4">
          <FeedbackTable title="Customer's Feedback" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
