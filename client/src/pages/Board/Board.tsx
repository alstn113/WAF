import * as S from './Board.styles';
import useGetPosts from '@libs/hooks/queries/post/useGetPosts';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import PostList from '@pages/Board/PostList/PostList';
import AsyncBoundary from '@src/components/AsyncBoundary';
import ErrorBoundary from '@src/components/ErrorBoundary';
import { Suspense } from 'react';

const Board = () => {
  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetPosts.getKey()}
        />
      }
    >
      <Suspense>
        <S.Container>
          <PostList />
        </S.Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Board;
