import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import * as PATH from "src/routes";

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
  const [progress, setProgress] = useState(12);

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
      <Box>문제 번호 </Box>
      <Box>질문 내용</Box>
      <Box>
        <Button variant="contained" onClick={() => {}}>
          선택지1
        </Button>
        <Button variant="contained" onClick={() => {}}>
          선택지2
        </Button>
      </Box>

      <LinearProgressWithLabel />
      <Button
        variant="contained"
        onClick={() => {
          navigate(PATH.LOADING);
        }}
      >
        결과확인하러 가기
      </Button>
    </Box>
  );
}
