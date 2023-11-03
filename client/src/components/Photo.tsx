import styled from "styled-components";
import type { Photo } from "../api/album";

type Props = {
  info: Photo;
};

export function Photo({ info: { description, name, src } }: Props) {
  return (
    <PhotoContainer>
      <img src={src} alt={description} />
      <div className="photo-name">{name}</div>
    </PhotoContainer>
  );
}

const PhotoContainer = styled.div`
  position: relative;
  margin: 5px;

  > img {
    width: 100%;
    max-height: 300px;
  }
  .photo-name {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 5px 1rem;
    color: white;
    top: 0;
    left: 0;
  }
`;
