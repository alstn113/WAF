import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
