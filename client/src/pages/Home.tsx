import useGetPosts from '../libs/hooks/queries/post/useGetPosts';
import formatDate from '../libs/utils/formatDate';

const Home = () => {
  const { data, isLoading, error } = useGetPosts();

  if (isLoading) return <div>loading..</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <div>{post.id}</div>
          <div>{post.body}</div>
          <div>
            {post.comments?.map((comment) => (
              <div key={comment.id}>
                <div>{comment.id}</div>
              </div>
            ))}
          </div>
          <div>{formatDate(post.createdAt)}</div>
          <div>{formatDate(post.updatedAt)}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
