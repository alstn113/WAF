import useGetPost from '@libs/hooks/queries/post/useGetPost';

interface Props {
  postId: string;
  children: React.ReactNode;
}

const PostDetailContent = ({ postId, children }: Props) => {
  const { data } = useGetPost(postId);

  return (
    <div>
      <div>ID : {data?.id}</div>
      <div>TITLE : {data?.title}</div>
      <div>BODY : {data?.body}</div>
      <hr />
      {children}
      <hr />
      <div>
        {data?.comments?.map((comment) => (
          <div key={comment.id}>
            <div>ID : {comment.id}</div>
            <div>TEXT : {comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetailContent;
