import styled from "styled-components";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import type { ReactNode } from "react";
import {
  BsFillCameraReelsFill,
  BsFillBrightnessHighFill,
  BsFillAirplaneFill,
  BsFillTelephoneFill,
  BsFillTreeFill,
  BsCloudFill,
} from "react-icons/bs";

function albumIconGenerator(name: string): ReactNode {
  const icons: {
    [key: string]: ReactNode;
  } = {
    albums: <BiSolidPhotoAlbum />,
    camera: <BsFillCameraReelsFill />,
    bright: <BsFillBrightnessHighFill />,
    airplane: <BsFillAirplaneFill />,
    telephone: <BsFillTelephoneFill />,
    tree: <BsFillTreeFill />,
    cloud: <BsCloudFill />,
  };

  return icons[name];
}

type Props = {
  toggleFolderMenu: () => void;
  isFolderMenuOpen: boolean;
};

export default function AlbumFolders({ toggleFolderMenu, isFolderMenuOpen }: Props) {
  const dummyAlbumList = [
    {
      id: 1,
      name: "album1",
      icon: "camera",
    },
    {
      id: 2,
      name: "album2",
      icon: "bright",
    },
    {
      id: 3,
      name: "album3",
      icon: "airplane",
    },
    {
      id: 4,
      name: "album4",
      icon: "telephone",
    },
    {
      id: 5,
      name: "album5",
      icon: "tree",
    },
    {
      id: 6,
      name: "album6",
      icon: "cloud",
    },
  ];

  function filteringPhotos(albumName: string) {
    // 해당 앨범의 포토를 보여준다
    console.log("filtering photos", albumName);
  }

  return (
    <AlbumFoldersContainer $isFolderMenuOpen={isFolderMenuOpen}>
      <ul className="album-menu">
        <AlbumLi name="Albums" onClick={toggleFolderMenu} icon={albumIconGenerator("albums")} />
        <AlbumLi name="All" onClick={() => filteringPhotos("all")} />
        {dummyAlbumList.map(({ icon, name, id }) => (
          <AlbumLi
            name={name}
            key={id}
            icon={albumIconGenerator(icon)}
            onClick={() => filteringPhotos(name)}
          />
        ))}
      </ul>
    </AlbumFoldersContainer>
  );
}

type LiProps = { name: string; onClick?: () => void; icon?: ReactNode };

const AlbumLi = ({ name, onClick, icon }: LiProps) => {
  return (
    <li onClick={onClick}>
      {icon}
      <div>{name}</div>
    </li>
  );
};

const AlbumFoldersContainer = styled.div<{ $isFolderMenuOpen: boolean }>`
  height: 100%;
  position: fixed;
  background: linear-gradient(to bottom right, #e2a763, #8b4414);
  width: ${({ $isFolderMenuOpen }) => ($isFolderMenuOpen ? "160px" : "60px")};
  transition: 0.3s ease;
  overflow: hidden;

  .album-menu {
    margin: 2px;
    > li {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 60px 1fr;
      align-items: center;
      padding: 1rem;
      border-bottom: 2px solid white;
    }
  }
`;
