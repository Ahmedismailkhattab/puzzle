
export enum GameMode {
  IMAGE_TO_WORD = 'IMAGE_TO_WORD',
  IMAGE_TO_NUMBER = 'IMAGE_TO_NUMBER',
  PATTERN_MATCHING = 'PATTERN_MATCHING'
}

export enum Difficulty {
  EASY = 4,
  MEDIUM = 6,
  HARD = 9
}

export interface PuzzleItem {
  id: string;
  image?: string;
  word?: string;
  value?: string | number;
  color?: string;
}

export interface MatchPair {
  sourceId: string;
  targetId: string;
}
