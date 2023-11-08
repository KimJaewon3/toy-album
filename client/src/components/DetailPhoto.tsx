import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { albumState, currentPhotoInfo } from "../store/album";
import { AiOutlineInfoCircle, AiOutlineZoomIn } from "react-icons/ai";

export default function DetailPhoto() {
  const photoInfo = useRecoilValue(currentPhotoInfo);

  useEffect(() => {
    console.log(photoInfo);
  }, []);

  if (!photoInfo) return null;

  return (
    <DetailPhotoContainer>
      <div className="img-btns">
        <AiOutlineZoomIn size="20px" color="white" />
        <AiOutlineInfoCircle size="20px" color="white" />
      </div>

      <div className="img-wrap">
        <img src={photoInfo?.src} />
      </div>
    </DetailPhotoContainer>
  );
}

const DetailPhotoContainer = styled.div`
  .img-wrap {
    background-color: white;
    padding: 5px;

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
