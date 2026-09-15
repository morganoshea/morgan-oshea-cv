import { Navigate, Route, Routes } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { TopBar } from "@/components/TopBar";
import { AboutPage } from "@/pages/AboutPage";
import { HomePage } from "@/pages/HomePage";

function App() {
  return (
    <>
      <TopBar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
