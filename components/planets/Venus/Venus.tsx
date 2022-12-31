import React from "react";
import { Container } from "../Mercury/Mercury";
import styled from "styled-components";
import venus from "../../../assets/planet-venus.svg";
import json from '../../../data.json'
import { Details, Info, Heading, Paragraph, Link, Content, About, DetailsForTablet, ForDesktopAdjustment, OverviewContent, DetailsContainer } from '../../styles/Details'
import source from '../../../assets/icon-source.svg'
function Venus() {
  
  return (
    <Container>
      <Image></Image>
      <ForDesktopAdjustment>
        {json && (
          <div>
            <OverviewContent>
              <Content>
                <Heading>{json[1].name}</Heading>
                <Paragraph>{json[1].overview.content}</Paragraph>
                <Link href={json[1].overview.source}>
                  Source: Wikipedia <Img></Img>
                </Link>
              </Content>
              <DetailsForTablet>
                <About color="#EDA249" background="#EDA249">
                  01 overview
                </About>
                <About color="#EDA249">02 internal structure</About>
                <About color="#EDA249">03 surface geology</About>
              </DetailsForTablet>
            </OverviewContent>
            <DetailsContainer>
              <Details>
                rotation time <Info>{json[1].rotation}</Info>
              </Details>
              <Details>
                revolution time <Info>{json[1].revolution}</Info>
              </Details>
              <Details>
                radius <Info>{json[1].radius}</Info>
              </Details>
              <Details>
                average temp. <Info>{json[1].temperature}</Info>
              </Details>
            </DetailsContainer>
          </div>
        )}
      </ForDesktopAdjustment>
    </Container>
  );
}

export default Venus;

const Image = styled.div`
  background: url(${venus});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px){
    width: 253px;
    height: 253px;
  }
  @media (min-width: 1440px){
    width: 400px;
    height: 400px;
    margin-left: 220px;
  }
`;

 const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;