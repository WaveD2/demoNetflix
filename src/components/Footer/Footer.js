import React, { useEffect, useState } from "react";
import styled from "styled-components";

var numberTime;
const Footer = () => {
  const [time, setTime] = useState("");
  const curTime = new Date();
  useEffect(() => {
    numberTime = setTimeout(() => {
      let hours = curTime.getHours();
      let minutes = curTime.getMinutes() + 1;
      let seconds = curTime.getSeconds();

      setTime(hours + " : " + minutes + " : " + seconds);
    }, 1000);
    return () => clearInterval(numberTime);
  }, [time]);

  return (
    <BoxFooter>
      <div className="name">WaveD</div>
      <div className="time">{time}</div>
      <div className="contacts">
        <h3>Contact</h3>
        <p className="phone">
          Phone : <span>0988233***</span>
        </p>
        <p className="email">
          Email : <span>tungwaved@gmail.com</span>
        </p>
        <p className="dress">
          Dress : <span>Ha Noi - Viet Nam</span>
        </p>
      </div>
    </BoxFooter>
  );
};

export default Footer;

const BoxFooter = styled.div`
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  color: #fff;
  .name {
    font-size: 40px;
    color: pink;
  }
  .time {
    font-size: 24px;
    color: pink;
  }
  .contacts {
    font-size: 20px;
    width: max-content;

    h3 {
      font-size: 24px;
      color: pink;
    }
    p {
      font-size: 20px;
      color: #ec79f7c4;
      margin-top: 8px;
      span {
        font-size: 16px;
        color: #9c6295c4;
      }
    }
  }
`;
