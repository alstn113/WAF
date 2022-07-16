import { Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';
import useGetPosts from '../../libs/hooks/queries/post/useGetPosts';
import formatDate from '../../libs/utils/formatDate';

const Board = () => {
  const { data, isLoading, error } = useGetPosts();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error.message}</div>;

  return (
    <Container display={'flex'} justifyContent={'center'} marginTop={'32'}>
      <div>
        {data?.map((post) => (
          <div key={post.id}>
            <Link to={`/board/post/${post.id}`}>{post.id}</Link>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>{formatDate(post.createdAt)}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Board;
