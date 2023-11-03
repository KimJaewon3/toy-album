import { useRecoilState } from "recoil";
import { albumState } from "../store/album";
import { useState } from "react";
import styled from "styled-components";
import { postFolder } from "../api/album";

export default function AlbumFolders() {
  const [album, setAlbum] = useRecoilState(albumState);
  const [folderName, setFolderName] = useState("");

  async function addFolder() {
    if (folderName === "") return;
    // const addedFolder = (await postFolder(folderName)).data;
    const addedFolder = {
      id: album.folders.length,
      name: folderName,
    };

    setAlbum({
      ...album,
      folders: [...album.folders, addedFolder],
    });
    setFolderName("");
  }

  async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      await addFolder();
    }
  }

  async function deleteFolder(targetId: number) {
    // await deleteFolder(targetId);

    setAlbum({
      ...album,
      folders: album.folders.filter(({ id }) => id !== targetId),
    });
  }

  return (
    <AlbumFoldersContainer>
      <div>
        <input
          type="text"
          placeholder="folder name here..."
          value={folderName}
          onKeyDown={(e) => handleEnter(e)}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <button onClick={addFolder}>+</button>
      </div>

      <ul>
        <li>all</li>
        {album.folders.map((folder) => (
          <li key={folder.id} className="folder-li">
            <div>{folder.name}</div>
            <button onClick={() => deleteFolder(folder.id)}>x</button>
          </li>
        ))}
      </ul>
    </AlbumFoldersContainer>
  );
}

const AlbumFoldersContainer = styled.div`
  .folder-li {
    display: flex;
  }
`;
