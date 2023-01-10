import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import * as PATH from "src/routes";

export default function Result() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* <MainMenu /> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        결과입니다 ~
      </Box>
    </Box>
  );
}
