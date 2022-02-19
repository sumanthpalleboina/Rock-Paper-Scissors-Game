import {
  HeaderContainer,
  GameToolNamesContainer,
  TextContent1,
  ScoreContainer,
  TextContent2,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <GameToolNamesContainer>
        <TextContent1>Rock Paper Scissors</TextContent1>
      </GameToolNamesContainer>
      <ScoreContainer>
        <TextContent2>Score</TextContent2>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}
export default Header
