import { Details, Info, Heading, Paragraph, Link, Content } from "../../styles/Details";
import source from "../../../assets/icon-source.svg";
import json from "../../../data.json";
import styled from "styled-components";
import uranus from "../../../assets/planet-uranus.svg";
function Uranus() {
  return (
    <Container>
      <Image></Image>
      <div>
        {json && (
          <div>
            <Content>
              <Heading>{json[6].name}</Heading>
              <Paragraph>{json[6].overview.content}</Paragraph>
              <Link href={json[6].overview.source}>
                Source: Wikipedia <Img></Img>
              </Link>
            </Content>
            <Details>
              rotation time <Info>{json[6].rotation}</Info>
            </Details>
            <Details>
              revolution time <Info>{json[6].revolution}</Info>
            </Details>
            <Details>
              radius <Info>{json[6].radius}</Info>
            </Details>
            <Details>
              average temp. <Info>{json[6].temperature}</Info>
            </Details>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Uranus;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  background: url(${uranus});
  display: flex;
  width: 111px;
  height: 111px;
  background-size: cover;
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 290px;
    height: 290px;
  }
`;

const Img = styled.div`
  background: url(${source});
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;
