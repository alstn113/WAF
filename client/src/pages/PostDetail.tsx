import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Container } from '@chakra-ui/react';
import useGetPost from '../libs/hooks/queries/post/useGetPost';
import formatDate from '../libs/utils/formatDate';

const PostDetail = () => {
  const params = useParams<{ postId: string }>();
  const postId = params.postId as string;
  const { data, isLoading, error } = useGetPost(postId);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>error</div>;

  return (
    <Container
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'32'}
    >
      <div>
        <div>ID : {data?.id}</div>
        <div>TITLE : {data?.title}</div>
        <div>BODY : {data?.body}</div>

        <div>
          {data?.comments?.map((comment) => (
            <div key={comment.id}>
              <div>ID : {comment.id}</div>
              <div>TEXT : {comment.text}</div>
              <div>{formatDate(comment.createdAt)}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PostDetail;
