import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Counter from './pages/Counter';
import Write from './pages/Write';
import PostDetail from './pages/PostDetail';
import ModelView from './pages/ModelView';
import Form from './pages/Form';
import Profile from './pages/Profile';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/UnAuthorized';

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
        <Route path="/form" element={<Form />} />
        <Route path="/model-view" element={<ModelView />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>{' '}
    </ChakraProvider>
  );
};

export default App;
