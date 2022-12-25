import { Details, Info, Heading, Paragraph, Link, Content } from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import earth from '../../../assets/planet-earth.svg'
function Earth() {
  return (
    <Container>
      <Image></Image>
      <div>
        {json && (
          <div>
            <Content>
              <Heading>{json[2].name}</Heading>
              <Paragraph>{json[2].overview.content}</Paragraph>
              <Link href={json[2].overview.source}>
                Source: Wikipedia <Img></Img>
              </Link>
            </Content>
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
          </div>
        )}
      </div>
    </Container>
  );
}

export default Earth;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
