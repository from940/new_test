import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import * as PATH from "src/routes";

export default function Intro() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(" location ", location);

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
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        인트로입니다
      </Box>
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
