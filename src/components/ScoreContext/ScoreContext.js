import React from 'react'

const ScoreContext = React.createContext({
  score: 0,
  isGameOver: false,
  Choiceimage: '',
  increaseScore: () => {},
  decreaseScore: () => {},
})

export default ScoreContext
