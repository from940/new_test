import { Outlet } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import { Box, useTheme } from "@mui/material";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eeeeee",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          background: "#eeeeee",
          height: "100vh",
          maxWidth: isBrowser ? "1200px" : "100%",
          width: isBrowser ? "1200px" : "100%",
          minWidth: isBrowser ? "500px" : "100%",
        }}
      >
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
