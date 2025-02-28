import styled from "styled-components";
import Title from "../Title";
import gallery from "../../assets/images/gallery.png";
import { useState } from "react";
import galleryList from "./galleryList";

const Gallery = () => {
  const [images, setImages] = useState(galleryList);

  return (
    <Wrapper id="gallery">
      <Title
        icon={gallery}
        subtitle="Gallery"
        style={{ color: "#ED3E31" }}
      />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>

      <div>
        <div className="gallery">
          {images.map(({ image }, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="gallery-img"
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  padding-top: 4rem;
  margin-bottom: 4rem;

  p {
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.8;
    max-width: 790px;
    margin: 0 auto;
  }

  div {
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 2rem;

    .gallery {
      display: grid;
      grid-template-columns: repeat(5, minmax(95px, 200px));
      justify-content: center;
      gap: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default Gallery;
