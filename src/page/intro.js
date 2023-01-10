import { Box, Button } from "@mui/material";

export default function Intro() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <MainMenu /> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        인트로입니다
        <Button
          variant="contained"
          onClick={() => {
            console.log("이동");
            // setPublishingTitle(title);
            // handleClose();
          }}
        >
          테스트하러 가기
        </Button>
      </Box>
    </Box>
  );
}
