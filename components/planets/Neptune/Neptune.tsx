import {
  Details,
  Info,
  Heading,
  Paragraph,
  Link,
  Content,
  DetailsForTablet,
  About,
  ForDesktopAdjustment,
  OverviewContent,
  DetailsContainer,
} from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import neptune from "../../../assets/planet-neptune.svg";
function Neptune() {
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[7].name}</Heading>
                <Paragraph>{json[7].overview.content}</Paragraph>
                <Link href={json[7].overview.source}>
                  Source: Wikipedia <Img></Img>
                </Link>
              </Content>
              <DetailsForTablet>
                <About color="#2D68F0" background="#2D68F0">
                  01 overview
                </About>
                <About color="#2D68F0">02 internal structure</About>
                <About color="#2D68F0">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[7].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[7].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[7].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[7].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Neptune;
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
  background: url(${neptune});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 285px;
    height: 285px;
  }
  @media (min-width: 1440px) {
    width: 445px;
    height: 445px;
    margin-left: 164px;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
