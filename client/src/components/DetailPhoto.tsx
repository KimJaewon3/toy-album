import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { albumState, currentPhoto } from "../store/album";
import { AiOutlineInfoCircle, AiOutlineZoomIn } from "react-icons/ai";
import { Photo } from "../api/album";

export default function DetailPhoto() {
  const photoInfo = useRecoilValue(currentPhoto);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  function toggleInfo() {
    setIsInfoOpen(!isInfoOpen);
  }

  return (
    <DetailPhotoContainer>
      <div className="img-btns">
        <div>
          <AiOutlineZoomIn size="20px" color="white" />
        </div>
        <div onClick={toggleInfo}>
          <AiOutlineInfoCircle size="20px" color="white" />
        </div>
      </div>

      <div className="img-wrap">
        <img src={photoInfo?.src} />
        {isInfoOpen && <PhotoInfo info={photoInfo} />}
      </div>
    </DetailPhotoContainer>
  );
}

const DetailPhotoContainer = styled.div`
  .img-wrap {
    background-color: white;
    padding: 5px;
    position: relative;

    > img {
      min-width: 300px;
      min-height: 300px;
      max-width: 700px;
      max-height: 700px;
    }
  }

  .img-btns {
    display: flex;
    justify-content: end;
    padding-bottom: 5px;
    > * {
      margin-left: 10px;
    }
  }
`;

function PhotoInfo({ info: { date, description, name, id } }: { info: Photo }) {
  const setAlbum = useSetRecoilState(albumState);
  const [editMode, setEditMode] = useState({
    name: false,
    date: false,
    description: false,
  });

  function toggleEditMode(editTarget: keyof typeof editMode) {
    setEditMode({
      ...editMode,
      [editTarget]: !editMode[editTarget],
    });
  }

  function handleSubmit(
    e: React.KeyboardEvent<HTMLInputElement>,
    editTarget: keyof typeof editMode
  ) {
    if (e.key !== "Enter") return;
    setAlbum((prev) => {
      return {
        ...prev,
        photos: prev.photos.map((item) => {
          if (item.id === id) {
            item = {
              ...item,
              [editTarget]: e.currentTarget.value,
            };
          }
          return item;
        }),
      };
    });
    toggleEditMode(editTarget);
  }

  return (
    <PhotoInfoContainer>
      <div className="photo-name">
        {editMode.name ? (
          <input defaultValue={name} onKeyDown={(e) => handleSubmit(e, "name")} />
        ) : (
          <div onClick={() => toggleEditMode("name")}>{name}</div>
        )}
      </div>
      <div className="photo-date">
        {editMode.date ? (
          <input defaultValue={date} onKeyDown={(e) => handleSubmit(e, "date")} />
        ) : (
          <div onClick={() => toggleEditMode("date")}>{date}</div>
        )}
      </div>
      <div className="photo-description">
        {editMode.description ? (
          <input defaultValue={description} onKeyDown={(e) => handleSubmit(e, "description")} />
        ) : (
          <div onClick={() => toggleEditMode("description")}>{description}</div>
        )}
      </div>
    </PhotoInfoContainer>
  );
}

const PhotoInfoContainer = styled.div`
  > div {
    position: absolute;
    background-color: white;
  }
  .photo-name {
    top: 0;
    left: 0;
  }
  .photo-date {
    bottom: 0;
    right: 0;
  }
  .photo-description {
    top: 0;
    right: -200px;
    background-color: white;
    width: 200px;
    height: 100%;
  }
`;
