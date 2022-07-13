import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Write from './pages/Write';
import PostDetail from './pages/PostDetail';
import ModelView from './pages/ModelView';
import FormDND from './pages/FormDND';
import MyPage from './pages/MyPage';
import useAuthStore from './libs/store/useAuthStore';
import { useEffect } from 'react';
import FormChange from './pages/FormChange';

const App = () => {
  const { getCurrentUser } = useAuthStore();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <ChakraProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/form-dnd" element={<FormDND />} />
        <Route path="/model-view" element={<ModelView />} />
        <Route path="/form-change" element={<FormChange />} />

        {/* protected routes */}

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
