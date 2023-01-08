import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/icon-chevron.svg";
export default function Menu({ isShown, setIsShown }: any) {
  const toggleBetweenPages = () => {
    setIsShown(!isShown)
  }
  return (
    <Container>
      <Content>
        <Link
          to="/"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#DEF4FC" }}></Circle>
          <Paragraph>mercury</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/venus"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#F7CC7F" }}></Circle>
          <Paragraph>venus</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/earth"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#545BFE" }}></Circle>
          <Paragraph>earth</Paragraph>

          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/mars"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#FF6A45" }}></Circle>
          <Paragraph>mars</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/jupiter"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#ECAD7A" }}></Circle>
          <Paragraph>jupiter</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/saturn"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#FCCB6B" }}></Circle>
          <Paragraph>saturn</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/uranus"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#65F0D5" }}></Circle>
          <Paragraph>uranus</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
      <Content>
        <Link
          to="/neptune"
          style={{ display: "flex", width: "90vw", alignItems: "center" }}
          onClick={toggleBetweenPages}
        >
          <Circle style={{ background: "#497EFA" }}></Circle>
          <Paragraph>neptune</Paragraph>
          <Arrow></Arrow>
        </Link>
      </Content>
      <Line></Line>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

const Content = styled.div`
  text-transform: uppercase;
  display: flex;
  /* justify-content: flex-start; */
  width: 100vw;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  margin-top: 38px;
  letter-spacing: 1.4px;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  /* background: yellow; */
`;

const Arrow = styled.div`
    background: url(${arrow});
    width: 6px;
    height: 8px;
    justify-content: flex-end;
    display: flex;
    align-items: flex-end;
    margin-left: auto;
`

 const Line = styled.div`
   width: 100vw;
   height: 1px;
   background: white;
   mix-blend-mode: normal;
   opacity: 0.2;
   margin-top: 12px;
 `;

 const Paragraph = styled.p`
   color: white;
   font-size: 15px;
   text-decoration: none;
   padding-left: 12px;
   /* width: 100px; */
 `;