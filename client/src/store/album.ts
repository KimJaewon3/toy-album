import { selector, atom } from "recoil";
import type { Photo } from "../api/album";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";

type AlbumState = {
  folders: { id: number; name: string }[]; // 폴더 이름만
  photos: Photo[]; // 전체 사진
  currentPhotoId: number;
};

const albumState = atom<AlbumState>({
  key: "album",
  default: {
    folders: [],
    photos: [],
    currentPhotoId: 0,
  },
});

const albumFolders = selector({
  key: "albumFolders",
  get: ({ get }) => {
    return get(albumState).folders;
  },
});

const albumPhotos = selector({
  key: "albumPhotos",
  get: ({ get }) => {
    return get(albumState).photos;
  },
});

const currentPhoto = selector({
  key: "currentPhoto",
  get: ({ get }) => {
    const { photos, currentPhotoId } = get(albumState);
    return photos.filter((p) => p.id === currentPhotoId)[0];
  },
});

// /album/picture?folderId={없으면 all}&page=1&sortBy={asc/desc}&name=&description=
export const dummyPhotos: Photo[] = [
  { id: 1, description: "im picture 1", name: "P1", src: p1, date: "2023-03-01" },
  { id: 2, description: "im picture 2", name: "P2", src: p2, date: "2023-03-01" },
  { id: 3, description: "im picture 3", name: "P3", src: p3, date: "2023-03-01" },
  { id: 4, description: "im picture 4", name: "P4", src: p4, date: "2023-03-01" },
  { id: 5, description: "im picture 5", name: "P5", src: p5, date: "2023-03-01" },
  { id: 6, description: "im picture 6", name: "P6", src: p1, date: "2023-03-01" },
  { id: 7, description: "im picture 7", name: "P7", src: p2, date: "2023-03-01" },
  { id: 8, description: "im picture 8", name: "P8", src: p3, date: "2023-03-01" },
  { id: 9, description: "im picture 9", name: "P9", src: p4, date: "2023-03-01" },
  { id: 10, description: "im picture 10", name: "P10", src: p5, date: "2023-03-01" },
  { id: 11, description: "im picture 11", name: "P11", src: p1, date: "2023-03-01" },
  { id: 12, description: "im picture 12", name: "P12", src: p2, date: "2023-03-01" },
  { id: 13, description: "im picture 13", name: "P13", src: p3, date: "2023-03-01" },
  { id: 14, description: "im picture 14", name: "P14", src: p4, date: "2023-03-01" },
  { id: 15, description: "im picture 15", name: "P15", src: p5, date: "2023-03-01" },
  { id: 16, description: "im picture 16", name: "P16", src: p1, date: "2023-03-01" },
  { id: 17, description: "im picture 17", name: "P17", src: p2, date: "2023-03-01" },
  { id: 18, description: "im picture 18", name: "P18", src: p3, date: "2023-03-01" },
  { id: 19, description: "im picture 19", name: "P19", src: p4, date: "2023-03-01" },
  { id: 20, description: "im picture 20", name: "P20", src: p5, date: "2023-03-01" },
];

export { albumState, albumFolders, currentPhoto, albumPhotos };
