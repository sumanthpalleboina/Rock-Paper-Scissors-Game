import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'

import './index.css'

import 'reactjs-popup/dist/index.css'

import {
  GameContainer,
  PlayingContainer,
  PlayingImagesContainers,
  RockAndScissorContainer,
  PaperContainer,
  ImgButton,
  Image,
  PopUpContainer,
  PopUpButton,
  CloseBtn,
  ModalContainer,
  RulesImage,
  OurAndOpponentImagesContainer,
  ImgContainer,
  TextContent,
  StatusWithPlayAgain,
  Status,
  PlayAgainBtn,
} from './styledComponents'

const gameStatus = {
  won: 'YOU WON',
  draw: 'IT IS DRAW',
  lose: 'YOU LOSE',
  initial: 'INITIAL',
}

class Game extends Component {
  state = {
    score: 0,
    isGameOver: false,
    Choiceimage: '',
    opponentImage: '',
  }

  scoreChange = () => {
    const {Choiceimage, opponentImage, score} = this.state
    const {choicesList} = this.props
    if (
      (Choiceimage === choicesList[0].imageUrl &&
        opponentImage === choicesList[1].imageUrl) ||
      (Choiceimage === choicesList[1].imageUrl &&
        opponentImage === choicesList[2].imageUrl) ||
      (Choiceimage === choicesList[2].imageUrl &&
        opponentImage === choicesList[0].imageUrl)
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (
      (Choiceimage === choicesList[1].imageUrl &&
        opponentImage === choicesList[0].imageUrl) ||
      (Choiceimage === choicesList[2].imageUrl &&
        opponentImage === choicesList[1].imageUrl) ||
      (Choiceimage === choicesList[0].imageUrl &&
        opponentImage === choicesList[2].imageUrl)
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  clickRock = () => {
    const {choicesList} = this.props
    const listLength = choicesList.length
    const random = Math.floor(Math.random() * listLength)
    const opponentImage = choicesList[random].imageUrl
    this.setState(
      {
        isGameOver: true,
        Choiceimage: choicesList[0].imageUrl,
        opponentImage,
      },
      this.scoreChange,
    )
  }

  clickScissors = () => {
    const {choicesList} = this.props
    const listLength = choicesList.length
    const random = Math.floor(Math.random() * listLength)
    const opponentImage = choicesList[random].imageUrl
    this.setState(
      {
        isGameOver: true,
        Choiceimage: choicesList[1].imageUrl,
        opponentImage,
      },
      this.scoreChange,
    )
  }

  clickPaper = () => {
    const {choicesList} = this.props
    const listLength = choicesList.length
    const random = Math.floor(Math.random() * listLength)
    const opponentImage = choicesList[random].imageUrl
    this.setState(
      {
        isGameOver: true,
        Choiceimage: choicesList[2].imageUrl,
        opponentImage,
      },
      this.scoreChange,
    )
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <PlayingContainer>
        <PlayingImagesContainers>
          <RockAndScissorContainer>
            <ImgButton
              type="button"
              data-testid="rockButton"
              onClick={this.clickRock}
            >
              <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
            </ImgButton>
            <ImgButton
              type="button"
              data-testid="scissorsButton"
              onClick={this.clickScissors}
            >
              <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
            </ImgButton>
          </RockAndScissorContainer>
          <PaperContainer>
            <ImgButton
              type="button"
              data-testid="paperButton"
              onClick={this.clickPaper}
            >
              <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
            </ImgButton>
          </PaperContainer>
        </PlayingImagesContainers>
      </PlayingContainer>
    )
  }

  renderGameResultsView = () => {
    const {Choiceimage, opponentImage} = this.state
    const {choicesList} = this.props
    const renderStatus = () => {
      if (
        (Choiceimage === choicesList[0].imageUrl &&
          opponentImage === choicesList[1].imageUrl) ||
        (Choiceimage === choicesList[1].imageUrl &&
          opponentImage === choicesList[2].imageUrl) ||
        (Choiceimage === choicesList[2].imageUrl &&
          opponentImage === choicesList[0].imageUrl)
      ) {
        return gameStatus.won
      }
      if (
        (Choiceimage === choicesList[1].imageUrl &&
          opponentImage === choicesList[0].imageUrl) ||
        (Choiceimage === choicesList[2].imageUrl &&
          opponentImage === choicesList[1].imageUrl) ||
        (Choiceimage === choicesList[0].imageUrl &&
          opponentImage === choicesList[2].imageUrl)
      ) {
        return gameStatus.lose
      }
      return gameStatus.draw
    }
    const clickPlayAgain = () => {
      this.setState(PrevState => ({
        isGameOver: !PrevState.isGameOver,
      }))
    }
    return (
      <PlayingContainer>
        <PlayingImagesContainers>
          <OurAndOpponentImagesContainer>
            <ImgContainer>
              <TextContent>YOU</TextContent>
              <Image src={Choiceimage} alt="your choice" />
            </ImgContainer>
            <ImgContainer>
              <TextContent>OPPONENT</TextContent>
              <Image src={opponentImage} alt="opponent choice" />
            </ImgContainer>
          </OurAndOpponentImagesContainer>
          <StatusWithPlayAgain>
            <Status>{renderStatus()}</Status>
            <PlayAgainBtn type="button" onClick={clickPlayAgain}>
              PLAY AGAIN
            </PlayAgainBtn>
          </StatusWithPlayAgain>
        </PlayingImagesContainers>
      </PlayingContainer>
    )
  }

  renderPopUp = () => (
    <PopUpContainer>
      <Popup
        modal
        className="popup-content"
        trigger={<PopUpButton>RULES</PopUpButton>}
      >
        {close => (
          <ModalContainer>
            <CloseBtn
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <RiCloseLine size="30" />
            </CloseBtn>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ModalContainer>
        )}
      </Popup>
    </PopUpContainer>
  )

  render() {
    const {isGameOver, score, opponentImage} = this.state
    console.log(opponentImage)
    return (
      <GameContainer>
        <Header score={score} />
        {isGameOver ? this.renderGameResultsView() : this.renderPlayingView()}
        {this.renderPopUp()}
      </GameContainer>
    )
  }
}
export default Game
