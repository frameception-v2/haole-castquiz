export type PageType = 'start' | 'question' | 'score';

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: string[];
}
