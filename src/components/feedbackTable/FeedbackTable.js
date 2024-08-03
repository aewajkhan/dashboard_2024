import React from "react";
import { FaStar } from "react-icons/fa";
import "./FeedbackTable.css";

const FeedbackTable = ({ title }) => {
  return (
    <div className="feedback-table-container">
      <h3 className="feedback-title">{title}</h3>
      <div className="feedback-list">
        <div className="feedback-item">
          <img
            className="customer-image"
            src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
            alt="Customer"
          />
          <div className="feedback-content">
            <h4 className="customer-name">Jenny Wilson</h4>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="feedback-text">
              The food was excellent and so was the service...
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <img
            className="customer-image"
            src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
            alt="Customer"
          />
          <div className="feedback-content">
            <h4 className="customer-name">Dianne Russell</h4>
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="white-star">
                <FaStar />
              </div>
            </div>

            <p className="feedback-text">
              We enjoyed the Eggs Benedict served on homemade focaccia bread...
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <img
            className="customer-image"
            src="https://i.pinimg.com/originals/a1/1c/b5/a11cb521eb3d0951fc49163f861dac09.jpg"
            alt="Customer"
          />
          <div className="feedback-content">
            <h4 className="customer-name">Devon Lane</h4>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="feedback-text">
              Normally wines are wines, but their selection was exceptional...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTable;
