import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import NotFound from '@pages/NotFound/NotFound';
import ModelView from '@pages/ModelView/ModelView';
import MyPage from '@pages/MyPage/MyPage';
import useAuthStore from '@libs/store/useAuthStore';
import { useEffect } from 'react';
import Form from '@pages/Form/Form';
import Board from '@pages/Board/Board';
import PostDetail from '@pages/PostDetail/PostDetail';
import Write from '@pages/Write/Write';

const App = () => {
  const { getCurrentUser } = useAuthStore();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/post/write" element={<Write />} />
        <Route path="/board/post/:postId" element={<PostDetail />} />
        <Route path="/form/:formId" element={<Form />} />
        <Route path="/form/model-view" element={<ModelView />} />

        {/* protected routes */}

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
