'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Fade,
  Slide,
  Zoom,
} from '@mui/material';
import { Question, MBTIAxis } from '@/types';

interface QuestionScreenProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: MBTIAxis) => void;
}

export default function QuestionScreen({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: QuestionScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerClick = (index: number, value: MBTIAxis) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      onAnswer(value);
      setSelectedAnswer(null);
    }, 500);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', py: 4 }}>
        {/* Progress Bar */}
        <Fade in={true}>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                質問 {currentQuestion + 1} / {totalQuestions}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                {Math.round(progress)}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                },
              }}
            />
          </Box>
        </Fade>

        {/* Question Card */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Slide direction="up" in={true} timeout={500}>
            <Card
              sx={{
                width: '100%',
                maxWidth: 700,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                overflow: 'visible',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Fade in={true} timeout={800}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 5,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      textAlign: 'center',
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      lineHeight: 1.5,
                    }}
                  >
                    {question.question}
                  </Typography>
                </Fade>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {question.answers.map((answer, index) => (
                    <Zoom
                      key={index}
                      in={true}
                      timeout={600 + index * 100}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Button
                        fullWidth
                        variant={selectedAnswer === index ? 'contained' : 'outlined'}
                        onClick={() => handleAnswerClick(index, answer.value)}
                        disabled={selectedAnswer !== null}
                        sx={{
                          py: 3,
                          px: 4,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 3,
                          border: '2px solid',
                          borderColor: selectedAnswer === index ? 'primary.main' : '#e0e0e0',
                          color: selectedAnswer === index ? 'white' : '#333',
                          background: selectedAnswer === index
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            : 'white',
                          transition: 'all 0.3s ease',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: 'primary.main',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                            background: selectedAnswer === index
                              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                              : 'rgba(102, 126, 234, 0.05)',
                          },
                          '&:disabled': {
                            opacity: selectedAnswer === index ? 1 : 0.5,
                          },
                        }}
                      >
                        {answer.text}
                      </Button>
                    </Zoom>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Slide>
        </Box>

        {/* Helper Text */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              直感で答えてください
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
