import {
  Details,
  Info,
  Heading,
  Paragraph,
  LinkAnchor,
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
import jupiter from "../../../assets/planet-jupiter.svg";
function Jupiter() {
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[4].name}</Heading>
                <Paragraph>{json[4].overview.content}</Paragraph>
                <LinkAnchor href={json[4].overview.source}>
                  Source: Wikipedia <Img></Img>
                </LinkAnchor>
              </Content>
              <DetailsForTablet>
                <About color="#D83A34" background="#D83A34">
                  01 overview
                </About>
                <About color="#D83A34">02 internal structure</About>
                <About color="#D83A34">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[4].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[4].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[4].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[4].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Jupiter;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  z-index: 1;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
  }
`;

const Image = styled.div`
  background: url(${jupiter});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 369px;
    height: 369px;
  }
  @media (min-width: 1240px) {
    width: 542px;
    height: 542px;
    margin-left: 44px;
  }
  @media (min-width: 1440px) {
    width: 582px;
    height: 582px;
    margin-left: 44px;
    z-index: 12;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
