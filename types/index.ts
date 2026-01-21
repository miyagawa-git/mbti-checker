export type MBTIAxis = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type MBTIType =
  | 'ENTJ' | 'ENTP' | 'ENFJ' | 'ENFP'
  | 'ESTJ' | 'ESTP' | 'ESFJ' | 'ESFP'
  | 'INTJ' | 'INTP' | 'INFJ' | 'INFP'
  | 'ISTJ' | 'ISTP' | 'ISFJ' | 'ISFP';

export interface Answer {
  text: string;
  value: MBTIAxis;
}

export interface Question {
  id: number;
  question: string;
  axis: 'EI' | 'SN' | 'TF' | 'JP';
  answers: Answer[];
}

export interface MBTIResult {
  type: MBTIType;
  title: string;
  description: string;
}

export interface DiagnosisState {
  currentQuestion: number;
  answers: MBTIAxis[];
}
