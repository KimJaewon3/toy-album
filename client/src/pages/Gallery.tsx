import styled from "styled-components";
import Parallax from "../components/gallery/Parallax";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { albumState, dummyPhotos } from "../store/album";
import { useEffect } from "react";

export default function Gallery() {
  const { photos } = useRecoilValue(albumState);
  const setAlbumstate = useSetRecoilState(albumState);

  useEffect(() => {
    setAlbumstate((prev) => {
      return {
        ...prev,
        photos: dummyPhotos,
      };
    });
  }, []);

  return (
    <GalleryContainer>
      <Parallax photos={photos} />
    </GalleryContainer>
  );
}

const GalleryContainer = styled.section``;
