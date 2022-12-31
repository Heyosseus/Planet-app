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
  DetailsContainer,
  OverviewContent,
} from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import mars from "../../../assets/planet-mars.svg";
function Mars() {
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[3].name}</Heading>
                <Paragraph>{json[3].overview.content}</Paragraph>
                <Link href={json[3].overview.source}>
                  Source: Wikipedia <Img></Img>
                </Link>
              </Content>
              <DetailsForTablet>
                <About color="#D14C32" background="#D14C32">
                  01 overview
                </About>
                <About color="#D14C32">02 internal structure</About>
                <About color="#D14C32">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[3].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[3].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[3].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[3].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Mars;
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
  background: url(${mars});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 213px;
    height: 213px;
  }
  @media (min-width: 1440px) {
    width: 335px;
    height: 335px;
    margin-left: 120px;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
