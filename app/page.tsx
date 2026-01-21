'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, Fade, Grow } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from '@/data/questions';
import { results } from '@/data/results';
import { MBTIAxis, MBTIType } from '@/types';

type Screen = 'home' | 'quiz' | 'result';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('home');
  const [answers, setAnswers] = useState<MBTIAxis[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mbtiResult, setMbtiResult] = useState<MBTIType | null>(null);

  const handleStart = () => {
    setScreen('quiz');
    setAnswers([]);
    setCurrentQuestion(0);
  };

  const handleAnswer = (answer: MBTIAxis) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 診断完了 - 結果を計算
      const result = calculateMBTI(newAnswers);
      setMbtiResult(result);
      setScreen('result');
    }
  };

  const calculateMBTI = (answers: MBTIAxis[]): MBTIType => {
    return answers.join('') as MBTIType;
  };

  const handleRestart = () => {
    setScreen('home');
    setAnswers([]);
    setCurrentQuestion(0);
    setMbtiResult(null);
  };

  if (screen === 'quiz') {
    return (
      <QuestionScreen
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  if (screen === 'result' && mbtiResult) {
    return (
      <ResultScreen
        result={results[mbtiResult]}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite',
        },
        '@keyframes pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      }}
    >
      <Container maxWidth="md">
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Grow in={true} timeout={1200}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  mb: 4,
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                  },
                }}
              >
                <PsychologyIcon sx={{ fontSize: 80, color: 'white' }} />
              </Box>
            </Grow>

            <Typography
              variant="h1"
              sx={{
                color: 'white',
                mb: 2,
                fontWeight: 800,
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              MBTI性格診断
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 6,
                fontWeight: 400,
                textShadow: '0 1px 5px rgba(0,0,0,0.1)',
              }}
            >
              4つの質問であなたの性格タイプを見つけよう
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleStart}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                background: 'white',
                color: '#667eea',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                },
              }}
            >
              診断を始める
            </Button>

            <Box sx={{ mt: 6, color: 'rgba(255, 255, 255, 0.7)' }}>
              <Typography variant="body1">
                所要時間: 約1分
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
