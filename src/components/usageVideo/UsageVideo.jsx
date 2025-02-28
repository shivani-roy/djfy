import styled from "styled-components";
import bgImg from "../../assets/images/bg-img.png";
import video from "../../assets/images/video.png";
import Title from "../Title";
import videoList from "./videoList";
import { useState } from "react";

const UsageVideo = () => {
  const [videos, setVideos] = useState(videoList);

  return (
    <Wrapper id="usage-video">
      <div>
        <div className="img-container">
          <img
            src={bgImg}
            alt="bg-img"
            className="bg-img"
          />
        </div>

        <div className="content">
          <Title
            icon={video}
            title="Usage"
            subtitle="Video"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>

        <div className="video-container">
          {videos.map(({ image }, index) => {
            return (
              <div
                key={index}
                className="video"
              >
                <img
                  src={image}
                  alt="video-thumbnail"
                  className="video-img"
                />
                <div className="overlay"></div>
                <img
                  src={video}
                  alt="play-btn"
                  className="play-btn"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #0a0d2cdb;
  /* overflow: hidden; */
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding: 2rem;
  padding-top: 6rem;

  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    overflow: hidden;

    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .content {
    p {
      text-align: center;
      font-weight: 300;
      font-size: 1rem;
      opacity: 0.8;
      max-width: 790px;
      margin: 0 auto;
    }
  }

  .video-container {
    display: grid;
    width: 80vw;
    max-width: 1600px;
    padding: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 0 auto;

    @media screen and (min-width: 1100px) {
      grid-template-columns: 685px 330px;

      .video:nth-child(1) {
        grid-row: span 2;
      }
    }
    .video {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      position: relative;

      .video-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 16px;
      }

      .overlay {
        background: #00000080;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 16px;
      }

      .play-btn {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        cursor: pointer;
      }
    }
  }
`;

export default UsageVideo;
