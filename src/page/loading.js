import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import * as PATH from "src/routes";
import { useEffect } from "react";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATH.RESULT);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box>로딩 중 ...</Box>
    </Box>
  );
}
