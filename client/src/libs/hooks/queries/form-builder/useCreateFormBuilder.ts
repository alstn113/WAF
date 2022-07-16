import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import {
  ICustomAxiosError,
  IFormBuilderCreateRequest,
  IFromBuilderResponse,
} from '../../../interfaces';

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
