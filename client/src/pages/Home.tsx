import styled from "styled-components";
import p1 from "../assets/images/p1.jpg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    function scrollHandler() {
      console.log(
        "srollY",
        window.scrollY,
        "innerHeigth",
        window.innerHeight,
        "offsetHeigth",
        document.body.offsetHeight
      );
      console.log();
    }

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <HomeContainer>
      <section className="home-s1" style={{ backgroundImage: `url(${p1})` }}></section>
      <section></section>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  > section {
    width: 100vw;
    height: 90vh;
  }
  .home-s1 {
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
