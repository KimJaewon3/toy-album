import { serverInstance } from "./config";

export const getAlbum = async () => {
  return await serverInstance.get("/album", {
    params: {},
  });
};

export const postFolder = async (folderName: string) => {
  return await serverInstance.post<{ id: number; name: string }>("/album/folders", {
    folderName,
  });
};

export const deleteFolder = async (id: number) => {
  return await serverInstance.delete("/album/folders", {
    params: {
      id,
    },
  });
};

// /album/picture?folderId={없으면 all}&page=1&sortBy={asc/desc}&name=&description=
type GetPhotosParams = {
  folderId: number | null;
  page: number;
  sortBy?: "asc" | "desc";
  name?: string;
  description?: string;
};
export type Photo = {
  id: number;
  name: string;
  description: string;
  src: string;
};
export const getPhotos = async (params: GetPhotosParams) => {
  return await serverInstance.get<Photo[]>("/photos", {
    params,
  });
};
