import * as S from './Board.styles';
import useGetPosts from '@libs/hooks/queries/post/useGetPosts';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from '@components/ErrorFallBack/ErrorFallBack';
import Loading from '@components/Loading/Loading';
import { MESSAGE } from '@src/config/message';
import PostList from '@pages/Board/PostList/PostList';

const Board = () => {
  return (
    <S.Container>
      <ErrorBoundary
        fallback={
          <ErrorFallBack
            message={MESSAGE.ERROR.LOAD_DATA}
            queryKey={useGetPosts.getKey()}
          />
        }
      >
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
};

export default Board;
