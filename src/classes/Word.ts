import Meaning from './../types/Meaning';
import Definition from './../types/Definition';

class Word {
  private _word: string = '';
  private _meanings: Meaning[] = [];

  constructor(object: any) {
    const { word, meanings } = object;
    
    this.word = word;
    this.meanings = meanings.map(({ partOfSpeech, definitions }: any) => {
      return {
        partOfSpeech,
        definitions: definitions.map(({ definition, synonyms, antonyms }: any) => {
          return { definition, synonyms, antonyms } as Definition;
        })
      } as Meaning;
    });
  }

  public get word(): string {
    return this._word;
  }

  public set word(value: string) {
    this._word = value;
  }

  public get meanings(): Meaning[] {
    return this._meanings;
  }

  public set meanings(value: Meaning[]) {
    this._meanings = value;
  }
}

export default Word;