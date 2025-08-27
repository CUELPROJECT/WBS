import ProjectTaskValidator from "@/components/validation.tsx";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "97vh",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}>
        <ProjectTaskValidator />
      </Box>
      <Footer />
    </Box>
  )
}

export default App
