import { useState } from 'react';
import {
  Container,
  SearchArea,
  SearchBar,
  SearchButton,
  SpanNotFoundMessage,
} from './styles';

import Word from './../classes/Word';
import api from './../services/api';
import WordCard from '../components/WordCard';

const App = () => {
  const [word, setWord] = useState<string>('');
  const [words, setWords] = useState<Word[]>([]);
  const [notFoundMessage, setNotFoundMessage] = useState<string>('');

  const searchWords = async () => {
    if (!word) return;
    setWords([]);
    setNotFoundMessage('');
    try {
      const response = await api.get(import.meta.env.VITE_API_ENDPOINT + word);
      let words = response.data;
      setWords(words);

    } catch(error) {
      setNotFoundMessage(`A palavra "${word}" não consta nos nossos registros.`);
    }
  }

  return (
    <Container>
      <SearchArea>
        <SearchBar
          placeholder="Digite uma palavra"
          value={word}
          onChange={(event) => setWord(event.target.value)} />

        <SearchButton onClick={searchWords}><h2>Buscar</h2></SearchButton>
      </SearchArea>

      {words.map((word: Word, index) => <WordCard key={index} word={word} />)}

      <SpanNotFoundMessage>{notFoundMessage}</SpanNotFoundMessage>
    </Container>
  )
}

export default App;