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
  @media (min-width: 1440px){
    width: 251px;
    height: 108px;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    color: #ffffff89;
  }
`

export const DetailsForTablet = styled.div`
 height: 152px;
  width: 285px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 104px 24px;
  gap: 12px;
  @media (max-width: 678px) {
    display: none;
  }

`
interface isActive {
  isActive?: boolean;
  background?: string
}

export const About = styled.a<isActive>`
  border: 1px solid white;
  height: 40px;
  width: 100%;
  text-transform: uppercase;
  text-align: left;
  padding: 0 20px;
  line-height: 40px;
  font-size: 10px;
  letter-spacing: 1.3px;
  background: ${props => props?.background};

  &:hover{
    background-color: ${props => props.color};
  }
  @media (min-width: 1440px){
    width: 340px;
  }
  
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
    font-size: 14px;
    font-weight: 100;
  }
`

export const LinkAnchor = styled.a`
  color: #d7d5d5;
  font-size: 12px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

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
  @media (min-width: 1440px){
    height: 120px;
  }
`;

export const OverviewContent = styled.div`
  display: flex;
  @media (min-width:1440px){
    display: flex;
    flex-direction: column;
    height: 600px;
    align-items: center;
    margin-top: 14px;
    
  }
`

export const DetailsContainer = styled.div`
@media (min-width: 1440px) {
  display: flex;
}
`

export const ForDesktopAdjustment = styled.div`
  @media (min-width: 1440px){
    width: 790px;
  }
`

export const Planets = styled.a`
  display: flex;
  justify-content: space-between;
  color: #ffffffc3;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  margin: 24px;
  font-size: 12px;
  width: 52px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10;
    top: 0;
    right: 0;
    height: 2px;
    background-color: ${props => props.color};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease-in-out 0s;
    width: 100%;
    margin-top: 20px;
    
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
    
  }
  @media (max-width: 678px) {
    display: none;
  }
`;


export const FlexContainerForDesktop = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const PlanetsContainer = styled.div`
  display: flex;
  text-decoration: none;
  color: white;
`