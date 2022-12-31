import React from 'react'
import { useParams } from 'react-router'
import json from '../../data.json'
import styled from 'styled-components';
import {
  Details,
  Info,
  Heading,
  Paragraph,
  Link,
  Content,
} from "../styles/Details";

function Structure() {
  let { planetId }: any = useParams();
  let eachPlanet:any = json.find(
    (element) => element.name.toLowerCase() === planetId.toLowerCase()
  );
  return (
    <Container>
      <Image src={eachPlanet.images.structure}></Image>
      <div>
      
          <div>
            <Content>
              <Heading>{eachPlanet.name}</Heading>
              <Paragraph>{eachPlanet.structure.content}</Paragraph>
              <Link href={eachPlanet.structure.source}>
                Source: Wikipedia <Img src={eachPlanet.structure.source}></Img>
              </Link>
            </Content>
            <Details>
              rotation time <Info>{eachPlanet.rotation}</Info>
            </Details>
            <Details>
              revolution time <Info>{eachPlanet.revolution}</Info>
            </Details>
            <Details>
              radius <Info>{eachPlanet.radius}</Info>
            </Details>
            <Details>
              average temp. <Info>{eachPlanet.temperature}</Info>
            </Details>
          </div>
        
      </div>
    </Container>
  );
}

export default Structure;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 285px;
    height: 285px;
  }
`;

const Img = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
