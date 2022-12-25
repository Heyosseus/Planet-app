import styled from "styled-components";
import arrow from "../../assets/icon-chevron.svg";
export default function Menu() {
  return (
    <Container>
      <Content href="/">
        <Circle style={{ background: "#DEF4FC" }}></Circle> mercury{" "}
        <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/venus">
        <Circle style={{ background: "#F7CC7F" }}></Circle> Venus{" "}
        <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/earth">
        <Circle style={{ background: "#545BFE" }}></Circle> earth{" "}
        <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/mars">
        <Circle style={{ background: "#FF6A45" }}></Circle> mars <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/jupiter">
        <Circle style={{ background: "#ECAD7A" }}></Circle> jupiter{" "}
        <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/saturn">
        <Circle style={{ background: "#FCCB6B" }}></Circle> saturn{" "}
        <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/uranus">
        <Circle style={{ background: "#65F0D5" }}></Circle> uranus{" "}
        <Arrow></Arrow>
      </Content>
      <Line></Line>
      <Content href="/neptune">
        <Circle style={{ background: "#497EFA" }}></Circle> neptune{" "}
        <Arrow></Arrow>
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

const Content = styled.a`
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: white;
  margin-top: 28px;
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