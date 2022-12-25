import React from "react";
import styled from "styled-components";
import mercury from "../../../assets/planet-mercury.svg";
import { useState, useEffect } from "react";
import json from "../../../data.json";
import source from "../../../assets/icon-source.svg";
import { Details, Info, Heading, Paragraph, Link, Content } from "../../styles/Details";
function Mercury() {
  return (
    <Container>
      <Image></Image>
      <div>
        {json && (
          <div>
            <Content>
              <Heading>{json[0].name}</Heading>
              <Paragraph>{json[0].overview.content}</Paragraph>
              <Link href={json[0].overview.source}>
                Source: Wikipedia <Img></Img>
              </Link>
            </Content>
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
          </div>
        )}
      </div>
    </Container>
  );
}

export default Mercury;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;



const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
