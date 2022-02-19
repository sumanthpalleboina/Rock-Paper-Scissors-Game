import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
  background-color: transparent;
  width: 90%;
  max-width: 1110px;
  min-width: 350px;
  border: 2px solid #ffffff;
  border-radius: 18px;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-top: 10px;
  @media (min-width: 768px) {
    padding: 20px;
    margin-top: 30px;
  }
`
export const GameToolNamesContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 500;
`
export const TextContent1 = styled.h1`
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  height: 100px;
  width: 120px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextContent2 = styled.p`
  font-size: 26px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 600;
  margin-bottom: 1px;
  @media (min-width: 768px) {
    font-size: 23px;
  }
`
export const ScoreValue = styled.p`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 1px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
