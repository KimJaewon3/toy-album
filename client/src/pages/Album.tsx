import styled from "styled-components";
import AlbumFolders from "../components/AlbumFolders";
import { dummyPhotos } from "../store/album";
import { Photo } from "../components/Photo";
import { useEffect, useRef, useState } from "react";

export default function Album() {
  const [isFolderMenuOpen, setIsFolderMenuOpen] = useState(false);

  function toggleFolderMenu() {
    setIsFolderMenuOpen(!isFolderMenuOpen);
  }

  return (
    <AlbumContainer $isFolderMenuOpen={isFolderMenuOpen}>
      <AlbumFolders toggleFolderMenu={toggleFolderMenu} />
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

const AlbumContainer = styled.section<{ $isFolderMenuOpen: boolean }>`
  display: grid;
  /* grid: 60px 1fr/160px calc(100% - 160px); */
  /* grid: 60px 1fr/60px calc(100% - 60px);   */
  grid: ${({ $isFolderMenuOpen }) =>
    $isFolderMenuOpen ? "60px 1fr/160px calc(100% - 160px)" : "60px 1fr/60px calc(100% - 60px)"};
  transition: 0.3s ease;
  font-family: "Heebo", sans-serif;
  user-select: none;
  background: #fff;
`;
