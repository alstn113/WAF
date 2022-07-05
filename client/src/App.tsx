import { Route, Routes } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import NotFoundPage from './pages/NotFoundPage';
import Nav from './components/Nav';
import PostDetailPage from './pages/PostDetailPage';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <ChakraProvider>
      <ScrollToTop />
      <Nav />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/counter" element={<CounterPage />} />

        {/* catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
