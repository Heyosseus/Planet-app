import React from "react";
import styled from "styled-components";
import mercury from "../../../assets/planet-mercury.svg";
import { useState, useEffect } from "react";
import json from "../../../data.json";
import source from "../../../assets/icon-source.svg";
import {
  Details,
  Info,
  Heading,
  Paragraph,
  Link,
  Content,
  DetailsForTablet,
  About,
  OverviewContent,
  DetailsContainer,
  ForDesktopAdjustment,
} from "../../styles/Details";
function Mercury() {
  const [isShown, setIsShown] = useState<boolean>(true);
  const handleUpdate = () => {
    setIsShown(isShown);
  };
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[0].name}</Heading>
                <Paragraph>{json[0].overview.content}</Paragraph>
                <Link href={json[0].overview.source}>
                  Source: Wikipedia <Img></Img>
                </Link>
              </Content>
              <DetailsForTablet>
                <About
                  color="#419EBB"
                  onClick={handleUpdate}
                  background={isShown ? "#419EBB" : ""}
                >
                  01 overview
                </About>
                <About color="#419EBB">02 internal structure</About>
                <About color="#419EBB">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[0].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[0].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[0].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[0].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Mercury;

export const Container = styled.div`
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
  background: url(${mercury});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 184px;
    height: 184px;
    margin-top: 64px;
  }
  @media (min-width: 1440px) {
    width: 284px;
    height: 284px;
    margin-left: 204px;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
