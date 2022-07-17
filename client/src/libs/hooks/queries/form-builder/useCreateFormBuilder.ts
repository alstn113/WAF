import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '@libs/api/form-builder.api';
import {
  ICustomAxiosError,
  IFormBuilderCreateRequest,
  IFromBuilderResponse,
} from '@libs/interfaces';

const useCreateFormBuilder = (
  options?: UseMutationOptions<
    IFromBuilderResponse,
    ICustomAxiosError,
    IFormBuilderCreateRequest
  >,
) => {
  return useMutation(FormBuilderAPI.createFormBuilder, options);
};

export default useCreateFormBuilder;
