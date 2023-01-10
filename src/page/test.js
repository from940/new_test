import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import * as PATH from "src/routes";

import { questions } from "src/data/questions";

// 추후 컴포넌트 분리해야 함
function LinearProgressWithLabel({ ...props }) {
  return (
    <Box
      sx={{
        width: "70%",
        maxWidth: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Test() {
  const navigate = useNavigate();

  // 질문지 개수
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography> {`문제 ${progress + 1}번`}</Typography>
      <Typography> {`내용 :: ${questions[progress].title}`}</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {questions[progress].options.map((option) => (
          <Button
            variant="contained"
            sx={{
              margin: "10px",
            }}
            onClick={() => {
              // 답 선택
              if (progress < questions.length - 1) {
                setProgress((prev) => prev + 1);
              }
            }}
          >
            {`선택지 ${option.index}번  ${option.description}`}
          </Button>
        ))}
      </Box>

      <LinearProgressWithLabel />
      {progress == questions.length - 1 && (
        <Button
          variant="contained"
          onClick={() => {
            navigate(PATH.LOADING);
          }}
        >
          결과확인하러 가기
        </Button>
      )}
    </Box>
  );
}
