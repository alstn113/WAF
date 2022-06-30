import { useGetAllPostsQuery } from '../generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';
import formatDate from '../lib/utils/formatDate';

const HomePage = () => {
  const { data, isLoading, error } = useGetAllPostsQuery(graphqlRequestClient);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      {data?.posts?.map((post) => (
        <div key={post.id}>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>{formatDate(post.createdAt)}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
