import {
  Details,
  Info,
  Heading,
  Paragraph,
  LinkAnchor,
  Content,
  About,
  DetailsForTablet,
  OverviewContent,
  DetailsContainer,
  ForDesktopAdjustment,
} from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import earth from "../../../assets/planet-earth.svg";
function Earth() {
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[2].name}</Heading>
                <Paragraph>{json[2].overview.content}</Paragraph>
                <LinkAnchor href={json[2].overview.source}>
                  Source: Wikipedia <Img></Img>
                </LinkAnchor>
              </Content>
              <DetailsForTablet>
                <About color="#6D2ED5" background="#6D2ED5">
                  01 overview
                </About>
                <About color="#6D2ED5">02 internal structure</About>
                <About color="#6D2ED5">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[2].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[2].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[2].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[2].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Earth;
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
  background: url(${earth});
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
    margin-left: 120px;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
