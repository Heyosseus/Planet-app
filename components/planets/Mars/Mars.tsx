import { Details, Info, Heading, Paragraph, Link, Content } from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import mars from "../../../assets/planet-mars.svg";
function Mars() {
  return (
    <Container>
      <Image></Image>
      <div>
        {json && (
          <div>
            <Content>
              <Heading>{json[3].name}</Heading>
              <Paragraph>{json[3].overview.content}</Paragraph>
              <Link href={json[3].overview.source}>
                Source: Wikipedia <Img></Img>
              </Link>
            </Content>
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
          </div>
        )}
      </div>
    </Container>
  );
}

export default Mars;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
