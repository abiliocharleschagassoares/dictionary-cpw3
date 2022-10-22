import { useState } from 'react';
import {
  MeaningList,
  DivWordCard,
  Heading,
  PartOfSpeech,
  DefinitionList,
  DefinitionHeading,
  DefinitionItem,
} from './styles';

import Word from './../../classes/Word';
import Meaning from './../../types/Meaning';

const WordCard = ({ word }: { word: Word; }) => {
  const [wordName] = useState<string>(word.word);
  const [meanings] = useState<Meaning[]>(word.meanings);

  return (
    <DivWordCard>
      <Heading>{wordName}</Heading>
      {meanings.map(({ partOfSpeech, definitions }) => {

        return (
          <MeaningList>
            <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
            {definitions.map(({ definition, synonyms, antonyms }) => {
              return (
                <DefinitionList>
                  <dl>
                    <DefinitionHeading>{definition}</DefinitionHeading>
                    <DefinitionItem>Sinônimos: {synonyms.length > 0 ? synonyms.join(', ') : 'Nenhum sinônimo disponível'}</DefinitionItem>
                    <DefinitionItem>Antônimos: {antonyms.length > 0 ? antonyms.join(', ') : 'Nenhum antônimo disponível'}</DefinitionItem>
                  </dl>
                </DefinitionList>
              );
            })}
          </MeaningList>
        );
      })}
    </DivWordCard>
  );
}

export default WordCard;