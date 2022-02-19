import styled from 'styled-components/macro'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayingContainer = styled.div`
  background-color: transparent;
  width: 90%;
  max-width: 1110px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 60vh;
  margin-bottom: 0px;
`

export const PlayingImagesContainers = styled.div`
  min-height: 80%;
  min-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RockAndScissorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PaperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ImgButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  height: 160px;
  width: 160px;
`

export const Image = styled.img`
  height: 160px;
  width: 160px;
`
export const PopUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 0;
`

export const PopUpButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 20px;
  width: 60px;
  height: 33px;
  align-self: flex-end;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CloseBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background: transparent;
  align-self: flex-end;
  margin-bottom: 20px;
`

export const RulesImage = styled.img`
  max-height: 600px;
  max-width: 500px;
  min-height: 300px;
  min-width: 300px;
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`
export const OurAndOpponentImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 90%;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  @media (min-width: 768px) {
    margin-right: 0px;
  }
`

export const TextContent = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`
export const StatusWithPlayAgain = styled.div``

export const Status = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 27px;
  text-align: center;
`
export const PlayAgainBtn = styled.button`
  color: #223a5f;
  font-family: 'Bree Serif';
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 9px;
  width: 160px;
  height: 35px;
`
