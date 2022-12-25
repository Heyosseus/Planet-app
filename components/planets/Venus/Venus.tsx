import React from "react";
import { Container } from "../Mercury/Mercury";
import styled from "styled-components";
import venus from "../../../assets/planet-venus.svg";
import json from '../../../data.json'
import { Details, Info, Heading, Paragraph, Link, Content } from '../../styles/Details'
import source from '../../../assets/icon-source.svg'
function Venus() {
  return (
    <Container>
      <Image></Image>
      <div>
        {json && (
          <div>
            <Content>
              <Heading>{json[1].name}</Heading>
              <Paragraph>{json[1].overview.content}</Paragraph>
              <Link href={json[1].overview.source}>
                Source: Wikipedia <Img></Img>
              </Link>
            </Content>
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
          </div>
        )}
      </div>
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
`;

 const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;