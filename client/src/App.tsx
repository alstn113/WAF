import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Counter from './pages/Counter';
import Write from './pages/Write';
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <ChakraProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/counter" element={<Counter />} />

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>{' '}
    </ChakraProvider>
  );
};

export default App;
