"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Fade,
  Grow,
  Zoom,
  Chip,
} from "@mui/material";
import Image from "next/image";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { MBTIResult } from "@/types";

interface ResultScreenProps {
  result: MBTIResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
        },
      }}
    >
      <Container maxWidth="md">
        <Fade in={true} timeout={1000}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Result Image */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Grow in={true} timeout={1200}>
                <Box
                  sx={{
                    display: "inline-block",
                    position: "relative",
                    animation: "float 3s ease-in-out infinite",
                    "@keyframes float": {
                      "0%, 100%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-15px)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: 250, md: 350 },
                      height: { xs: 250, md: 350 },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: -20,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 40%, transparent 70%)",
                        filter: "blur(15px)",
                        zIndex: -1,
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: -10,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 80%)",
                        zIndex: -1,
                      },
                    }}
                  >
                    <Image
                      src={`/results/${result.type}.png`}
                      alt={`${result.type} - ${result.title}`}
                      width={350}
                      height={350}
                      priority
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 10px 40px rgba(0, 0, 0, 0.3))",
                      }}
                    />
                  </Box>
                </Box>
              </Grow>
            </Box>

            {/* Result Card */}
            <Zoom in={true} timeout={800}>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 4,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                  overflow: "visible",
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 6 }, textAlign: "center" }}>
                  {/* MBTI Type Badge */}
                  {/* <Fade in={true} timeout={1200}>
                    <Box sx={{ mb: 3 }}>
                      <Chip
                        label={result.type}
                        sx={{
                          fontSize: '2rem',
                          fontWeight: 800,
                          height: 'auto',
                          py: 2,
                          px: 4,
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          letterSpacing: '0.1em',
                          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
                        }}
                      />
                    </Box>
                  </Fade> */}

                  {/* Title */}
                  <Fade in={true} timeout={1400}>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 4,
                        fontWeight: 700,
                        color: "#1a1a1a",
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                      }}
                    >
                      あなたは「{result.title}」
                    </Typography>
                  </Fade>

                  {/* Description */}
                  <Fade in={true} timeout={1600}>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
                        borderRadius: 3,
                        p: 4,
                        mb: 4,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#333",
                          lineHeight: 1.8,
                          fontSize: { xs: "1rem", md: "1.2rem" },
                          fontWeight: 400,
                        }}
                      >
                        {result.description}
                      </Typography>
                    </Box>
                  </Fade>

                  {/* Restart Button */}
                  <Fade in={true} timeout={1800}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<RestartAltIcon />}
                      onClick={onRestart}
                      sx={{
                        px: 5,
                        py: 2,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 30px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      もう一度診断する
                    </Button>
                  </Fade>
                </CardContent>
              </Card>
            </Zoom>

            {/* Footer Text */}
            <Fade in={true} timeout={2000}>
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.95rem",
                  }}
                >
                  診断結果をシェアして、友達のタイプも確認してみよう
                </Typography>
              </Box>
            </Fade>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
