import React, { useState } from 'react'
import FlashcardList from './components/FlashcardList';
import './App.css'

function App() {
  const [cards, setCards] = useState(SAMPLE_CARDS)
  return (
    <FlashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'A HTML Question',
    answer: 'HTML answer',
    options: ['1', '2', '3', '4']
  },
  {
    id: 1,
    question: 'A JS Question',
    answer: 'JS answer',
    options: ['1', '2', '3', '4']
  },
  {
    id: 1,
    question: 'A CSS Question',
    answer: 'CSS answer',
    options: ['1', '2', '3', '4']
  }
]

export default App;
