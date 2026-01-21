import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    question: '人と会う予定がない休日、あなたは？',
    axis: 'EI',
    answers: [
      { text: '誰かに連絡して外に出たい', value: 'E' },
      { text: '1人で過ごして回復したい', value: 'I' },
    ],
  },
  {
    id: 2,
    question: '説明を聞くとき、重視するのは？',
    axis: 'SN',
    answers: [
      { text: '具体例・事実', value: 'S' },
      { text: '全体像・アイデア', value: 'N' },
    ],
  },
  {
    id: 3,
    question: '意見が割れたとき、判断基準は？',
    axis: 'TF',
    answers: [
      { text: '論理的に正しいか', value: 'T' },
      { text: '気持ちや影響', value: 'F' },
    ],
  },
  {
    id: 4,
    question: '締切がある作業、あなたは？',
    axis: 'JP',
    answers: [
      { text: '早めに終わらせたい', value: 'J' },
      { text: '直前に集中する', value: 'P' },
    ],
  },
];
