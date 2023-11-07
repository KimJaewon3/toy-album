import { selector, atom } from "recoil";
import type { Photo } from "../api/album";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";

type AlbumState = {
  folders: { id: number; name: string }[]; // 폴더 이름만
  photos: string[]; // 전체 사진
};

const albumState = atom<AlbumState>({
  key: "album",
  default: {
    folders: [],
    photos: [],
  },
});

const albumFolders = selector({
  key: "albumFolders",
  get: ({ get }) => {
    return get(albumState).folders;
  },
});

// /album/picture?folderId={없으면 all}&page=1&sortBy={asc/desc}&name=&description=
export const dummyPhotos: Photo[] = [
  { id: 1, description: "im picture 1", name: "P1", src: p1 },
  { id: 2, description: "im picture 2", name: "P2", src: p2 },
  { id: 3, description: "im picture 3", name: "P3", src: p3 },
  { id: 4, description: "im picture 4", name: "P4", src: p4 },
  { id: 5, description: "im picture 5", name: "P5", src: p5 },
  { id: 6, description: "im picture 6", name: "P6", src: p1 },
  { id: 7, description: "im picture 7", name: "P7", src: p2 },
  { id: 8, description: "im picture 8", name: "P8", src: p3 },
  { id: 9, description: "im picture 9", name: "P9", src: p4 },
  { id: 10, description: "im picture 10", name: "P10", src: p5 },
];

export { albumState, albumFolders };
