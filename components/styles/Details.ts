import styled from "styled-components"

export const Details = styled.div`
  width: 90vw;
  height: 48px;
  border: 1px solid white;
  color: #ffffff53;
  border-color: #ffffff53;
  margin: 8px 24px;
  text-transform: uppercase;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: .7px;
  padding: 24px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  font-size: 20px;
  font-family: 'Antonio';
  font-weight: 400;
  line-height: 26px;
  color: white;
`

 export const Heading = styled.div`
  font-family: 'Antonio';
  font-size: 40px;
  line-height: 52px;
  color: white;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  @media (min-width: 678px){
    font-size: 48px;
    line-height: 63px;
  }
`

 export const Paragraph = styled.div`
  font-size: 11px;
  line-height: 22px;
  text-align: center;
  margin: 24px;
  color: #d7d5d5;
  @media (min-width:678px){
    width: 340px;
    text-align: left;
    margin: 16px 0;
    color: #d7d5d5;
    font-size: 12px;
  }
`

export const Link = styled.a`
  color: #d7d5d5;
  font-size: 12px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width:678px){
    width: 340px;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 48px 24px;
  }
`;