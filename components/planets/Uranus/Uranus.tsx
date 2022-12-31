import {
  Details,
  Info,
  Heading,
  Paragraph,
  Link,
  Content,
  About,
  DetailsForTablet,
  ForDesktopAdjustment,
  OverviewContent,
  DetailsContainer,
} from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import uranus from "../../../assets/planet-uranus.svg";
function Uranus() {
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[6].name}</Heading>
                <Paragraph>{json[6].overview.content}</Paragraph>
                <Link href={json[6].overview.source}>
                  Source: Wikipedia <Img></Img>
                </Link>
              </Content>
              <DetailsForTablet>
                <About color="#1EC1A2" background="#1EC1A2">
                  01 overview
                </About>
                <About color="#1EC1A2">02 internal structure</About>
                <About color="#1EC1A2">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[6].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[6].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[6].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[6].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Uranus;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Image = styled.div`
  background: url(${uranus});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 290px;
    height: 290px;
  }
  @media (min-width: 1440px) {
    width: 458px;
    height: 458px;
    margin-left: 112px;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
