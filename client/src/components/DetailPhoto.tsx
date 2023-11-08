import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { albumState, currentPhotoInfo } from "../store/album";

export default function DetailPhoto() {
  const photoInfo = useRecoilValue(currentPhotoInfo);

  useEffect(() => {
    console.log(photoInfo);
  }, []);
  return (
    <DetailPhotoContainer>
      <div>{photoInfo?.id}</div>
      <div>{photoInfo?.src}</div>
      <div>{photoInfo?.name}</div>
      <div>{photoInfo?.description}</div>
    </DetailPhotoContainer>
  );
}

const DetailPhotoContainer = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
`;
