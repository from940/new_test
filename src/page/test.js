import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import * as PATH from "src/routes";

export default function Test() {
  const navigate = useNavigate();
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
      <Box>테스트입니다</Box>
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
