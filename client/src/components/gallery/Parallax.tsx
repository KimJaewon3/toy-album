import styled from "styled-components";
import { Photo } from "../../api/album";

type Props = {
  photos: Photo[];
};

export default function Parallax({ photos }: Props) {
  return (
    <ParallaxContainer>
      {photos.map((photo) => (
        <div className="img-container" key={photo.id}>
          <div className="img-wrap">
            <img src={photo.src} />
          </div>
          <div className="img-desc-box">
            <div className="img-title">{photo.name}</div>
            <div className="img-desc">{photo.description}</div>
            <div className="img-date">{photo.date}</div>
          </div>
        </div>
      ))}
    </ParallaxContainer>
  );
}

const ParallaxContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 30px;
  background-color: azure;
  /* grid-auto-flow: column; */
  .img-container {
    display: flex;
    margin-top: 100px;

    .img-wrap {
      position: relative;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 500px;

      aspect-ratio: 1.1;
      transform: perspective(400px) rotateY(10deg);
      transition: 0.5s;
      clip-path: inset(0 10% 0 0 round 20px);

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 70%;
        min-height: 70%;
        border: 2px solid black;
        margin: 5px;
      }
    }
    .img-wrap:hover {
      clip-path: inset(0 0 0 10% round 20px);
      transform: perspective(400px) translateX(-10%) rotateY(-10deg);
    }
  }
  .img-container:last-child {
    margin-bottom: 100px;
  }
`;
