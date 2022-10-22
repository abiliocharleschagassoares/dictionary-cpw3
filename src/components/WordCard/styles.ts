import styled from 'styled-components';

export const DivWordCard = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h2`
  font-family: 'Oswald';
  font-size: 300%;
  color: var(--dracula-orchid);

  margin-right: 64px;
  margin-top: 32px;
  `;

export const MeaningList = styled.dl`
  margin-right: 32px;
`;

export const PartOfSpeech = styled.dt`
  font-family: 'Open Sans';
  font-style: italic;
  margin-left: 0;
`;

export const DefinitionList = styled.dd`
  display: flex;
  margin-left: 0;
`;

export const DefinitionHeading = styled.dt`
  font-family: 'Open Sans';
  font-weight: 700;
`;

export const DefinitionItem = styled.dd`
  font-family: 'Open Sans';
  line-height: 1.5;
  margin-left: 0;
`;