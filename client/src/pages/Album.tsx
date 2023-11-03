import styled from "styled-components";
import AlbumFolders from "../components/AlbumFolders";
import { dummyPhotos } from "../store/album";
import { Photo } from "../components/Photo";

export default function Album() {
  return (
    <AlbumContainer>
      <AlbumFolders />
      <div className="masonry-container">
        {dummyPhotos.map((photo) => (
          <div key={photo.id} className="masonry-item">
            <Photo info={photo} />
            {/* <img src={photo.src} /> */}
          </div>
        ))}
      </div>
    </AlbumContainer>
  );
}

const AlbumContainer = styled.section`
  border: 2px solid black;
  display: flex;
`;
