import styled from "styled-components";
import AlbumFolders from "../components/AlbumFolders";
import { albumPhotos, albumState, dummyPhotos } from "../store/album";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "../api/album";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useModal } from "../context/modalCtx";

export default function Album() {
  const [isFolderMenuOpen, setIsFolderMenuOpen] = useState(false);
  const setAlbumstate = useSetRecoilState(albumState);
  const photos = useRecoilValue(albumPhotos);
  const { dispatch } = useModal();

  useEffect(() => {
    setAlbumstate((prev) => {
      return {
        ...prev,
        photos: dummyPhotos,
      };
    });
  }, []);

  function toggleFolderMenu() {
    setIsFolderMenuOpen(!isFolderMenuOpen);
  }

  function openDetailPhoto(id: number) {
    setAlbumstate((prev) => {
      return {
        ...prev,
        currentPhotoId: id,
      };
    });
    dispatch({ type: "MODAL_OPEN", payload: "detailPhoto" });
  }

  return (
    <AlbumContainer $isFolderMenuOpen={isFolderMenuOpen}>
      <AlbumFolders toggleFolderMenu={toggleFolderMenu} isFolderMenuOpen={isFolderMenuOpen} />
      <div className="photos-container">
        {photos.map((photo) => (
          <div className="photo-wrap" key={photo.id} onClick={() => openDetailPhoto(photo.id)}>
            <img src={photo.src} />
          </div>
        ))}
      </div>
    </AlbumContainer>
  );
}

const AlbumContainer = styled.section<{ $isFolderMenuOpen: boolean }>`
  background: #fff;
  height: 90vh;
  position: relative;
  background-color: black;
  overflow-x: hidden;
  .photos-container {
    transition: 0.3s ease;
    margin-left: ${({ $isFolderMenuOpen }) => ($isFolderMenuOpen ? "160px" : "60px")};

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .photo-wrap {
      width: 200px;
      height: 200px;
      overflow: hidden;
      position: relative;
      margin: 10px 0 0 10px;
      border: 1px solid white;
      > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .photo-wrap:hover {
      scale: 1.5;
      transition: 0.3s ease;
      z-index: 5;
    }
  }
`;
