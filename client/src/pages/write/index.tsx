import { NextPage } from 'next';
import { useQueryClient } from 'react-query';
import {
  CreatePostMutation,
  CreatePostMutationVariables,
  useCreatePostMutation,
} from '../../generated/graphql';
import graphqlRequestClient from '../../lib/client/graphqlRequestClient';

const Write: NextPage = () => {
  const queryClient = useQueryClient();
  const { mutate } = useCreatePostMutation<Error>(graphqlRequestClient, {
    onSuccess: (
      data: CreatePostMutation,
      _variables: CreatePostMutationVariables,
      _context: unknown,
    ) => {
      queryClient.invalidateQueries(['GetAllPosts', {}]);
      console.log('mutation test', data);
    },
  });

  const createPost = () => {
    mutate({ createPostInput: { title: 'Test Title', body: 'Test Body' } });
  };
  return (
    <div>
      <button onClick={createPost}>Mutation Test</button>
    </div>
  );
};

export default Write;
