import { Link } from 'react-router-dom';
import Loading from '@src/components/Loading/Loading';
import useGetPosts from '@libs/hooks/queries/post/useGetPosts';
import formatDate from '@libs/utils/formatDate';

const Board = () => {
  const { data, isLoading, error } = useGetPosts();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
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
    </div>
  );
};

export default Board;
