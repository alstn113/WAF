import { Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import useGetPosts from '../libs/hooks/queries/post/useGetPosts';
import formatDate from '../libs/utils/formatDate';

const Home = () => {
  const { data } = useGetPosts();

  return (
    <Container display={'flex'} justifyContent={'center'} marginTop={'32'}>
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary fallback={<div>error</div>}>
          <div>
            {data?.map((post) => (
              <div key={post.id}>
                <Link to={`/post/${post.id}`}>{post.id}</Link>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <div>{formatDate(post.createdAt)}</div>
              </div>
            ))}
          </div>
        </ErrorBoundary>
      </Suspense>
    </Container>
  );
};

export default Home;
