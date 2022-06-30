import { Link } from 'react-router-dom';
import {
  DeletePostMutation,
  DeletePostMutationVariables,
  useDeletePostMutation,
  useGetAllPostsQuery,
} from '../lib/generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import formatDate from '../lib/utils/formatDate';

const HomePage = () => {
  const { data, isLoading, error, refetch } =
    useGetAllPostsQuery(graphqlRequestClient);

  const { mutate } = useDeletePostMutation(graphqlRequestClient, {
    onSuccess: (
      _data: DeletePostMutation,
      _variables: DeletePostMutationVariables,
      _context: unknown,
    ) => {
      refetch();
    },
  });

  const deletePost = (postId: string) => {
    mutate({ deletePostId: postId });
  };

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      {data?.posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.id}</Link>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>{formatDate(post.createdAt)}</div>
          <button onClick={() => deletePost(post.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
