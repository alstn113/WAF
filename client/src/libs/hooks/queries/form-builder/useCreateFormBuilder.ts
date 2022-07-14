import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import {
  ICustomAxiosError,
  IFormBuilderCreateRequest,
  IFromBuilder,
} from '../../../interfaces';

const useCreateFormBuilder = (
  options?: UseMutationOptions<
    IFromBuilder,
    ICustomAxiosError,
    IFormBuilderCreateRequest
  >,
) => {
  return useMutation(FormBuilderAPI.createFormBuilder, options);
};

export default useCreateFormBuilder;
