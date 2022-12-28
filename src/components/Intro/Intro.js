import React, { useState } from "react";
import ReactPlayer from "react-player";
import { icons } from "../../util/icons";
import styled from "styled-components";
const { CiVolumeMute, VscUnmute } = icons;

const Intro = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleMuted = () => {
    isMuted ? setIsMuted(false) : setIsMuted(true);
  };
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        width="100%"
        height="90vh"
        volume={1}
        loop={true}
        muted={isMuted}
        url="https://vod-progressive.akamaized.net/exp=1672254304~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1418%2F19%2F482090170%2F2157351131.mp4~hmac=f01b89ea89f60976a9f75b216c0d53f9a4b1584983febffd834b1b41b61fdd76/vimeo-prod-skyfire-std-us/01/1418/19/482090170/2157351131.mp4"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">Netflix Elite</h1>
        <p className="overviewIntro">
          Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà
          không cần cung cấp thông tin thanh toán!
        </p>
      </div>
      <span onClick={() => handleMuted()}>
        {isMuted ? (
          <CiVolumeMute className="btnVolume" />
        ) : (
          <VscUnmute className="btnVolume" />
        )}
      </span>
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  position: relative;
  background-color: black;
  color: var(--color-white);
  padding-top: 45%;
  height: 100vh;
  .videoIntro {
   position: absolute;;
    left: 0;
    top: 0;
    margin-top:70px ;
    z-index :1;
  }

  .infoIntro {
    position: absolute;
    bottom: 50%;
    left: 30px;
    z-index : 2;

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s easy;

      @media only screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media only screen and (max-width: 600px) {
        font-size: 24px;
      }
    }

    .overviewIntro {
      max-width : 550px;
     width : 100%;
     line-height : 1.3;
     padding-top:25px 
     font-size : 18px;

     
      @media only screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
   
  }
   .btnVolume{
     position: absolute;
     right: 6%;
     bottom: 30%; 
     height: 40px;
     width: 40px;
     cursor: pointer;
     border-radius : 50%;
     padding: 6px;
     color : #bbb;
     border : #fff solid 1px;
     transition:  all .5s ease;
     transform: scale(1);

     &:hover {
      color : #fff;
      transform: scale(1.2);
      background: rgba(211, 211 ,211 , .12);
     }
      @media only screen and (max-width: 800px) {
     height: 30px;
     width: 30px;
     padding:4px;
      }
      @media only screen and (max-width: 600px) {
     height: 20px;
     width: 20px;
     padding: 1px;
      }
    }
    .fadeBottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
     background-image: linear-gradient( 180deg, transparent , rgba(15 , 15, 15,.6) 40% , rgb(17 , 17 , 17) , rgb(17 , 17 , 17))  ; ;
    }
`;
