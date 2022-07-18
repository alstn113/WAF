import * as S from './Board.styles';
import useGetPosts from '@libs/hooks/queries/post/useGetPosts';
import ErrorFallback from '@src/components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import PostList from '@pages/Board/PostList/PostList';
import AsyncBoundary from '@src/components/AsyncBoundary';

const Board = () => {
  return (
    <AsyncBoundary
      rejectedFallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetPosts.getKey()}
        />
      }
    >
      <S.Container>
        <PostList />
      </S.Container>
    </AsyncBoundary>
  );
};

export default Board;
