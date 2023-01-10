import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import * as PATH from "src/routes";

export default function Intro() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <Box>로고</Box>
      <Typography variant="h2" component="h2">
        테스트 제목 영역
      </Typography>
      <Typography variant="h6" component="h6">
        description 영역
      </Typography>
      <Box>이미지 넣을 곳</Box>
      <Button
        variant="contained"
        onClick={() => {
          navigate(PATH.TEST);
        }}
      >
        테스트하러 가기
      </Button>
    </Box>
  );
}
