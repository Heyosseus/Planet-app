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
import saturn from "../../../assets/planet-saturn.svg";
function Saturn() {
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[5].name}</Heading>
                <Paragraph>{json[5].overview.content}</Paragraph>
                <LinkAnchor href={json[5].overview.source}>
                  Source: Wikipedia <Img></Img>
                </LinkAnchor>
              </Content>
              <DetailsForTablet>
                <About color="#CD5120" background="#CD5120">
                  01 overview
                </About>
                <About color="#CD5120">02 internal structure</About>
                <About color="#CD5120">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[5].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[5].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[5].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[5].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Saturn;
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
  background: url(${saturn});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 343px;
    height: 343px;
  }
  @media (min-width: 1440px) {
    width: 563px;
    height: 563px;
    margin-left:84px;
  }

`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
