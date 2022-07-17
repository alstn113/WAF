import { Link } from 'react-router-dom';
import formatDate from '@libs/utils/formatDate';
import useGetPosts from '@libs/hooks/queries/post/useGetPosts';

const PostList = () => {
  const { data } = useGetPosts();
  return (
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
  );
};

export default PostList;
