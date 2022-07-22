import useGetPosts from '@libs/hooks/queries/post/useGetPosts';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import PostList from '@pages/Board/PostList/PostList';
import AsyncBoundary from '@src/components/AsyncBoundary';
import { Container } from '@chakra-ui/react';

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
      <Container display={'flex'} justifyContent={'center'} marginTop={'32'}>
        <PostList />
      </Container>
    </AsyncBoundary>
  );
};

export default Board;
