import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

type Props = {
  pathList: string[];
};

export default function Menu({ pathList }: Props) {
  function getPageName(path: string) {
    if (path === "/") return "home";
    return path.split("/")[1];
  }

  return (
    <MenuContainer>
      <ul>
        {pathList.map((path) => (
          <li key={path}>
            <NavLink to={path}>{getPageName(path)}</NavLink>
          </li>
        ))}
      </ul>
    </MenuContainer>
  );
}

const MenuContainer = styled.nav`
  height: 10vh;
  > ul {
    list-style: none;
    display: flex;
    > li {
      margin: 0 10px;
    }
  }
`;
