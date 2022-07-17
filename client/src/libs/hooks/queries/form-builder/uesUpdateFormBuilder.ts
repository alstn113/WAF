import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '@libs/api/form-builder.api';
import {
  ICustomAxiosError,
  IFormBuilderUpdateRequest,
  IFromBuilderResponse,
} from '@libs/interfaces';

const useUpdateFormBuilder = (
  id: string,
  options?: UseMutationOptions<
    IFromBuilderResponse,
    ICustomAxiosError,
    IFormBuilderUpdateRequest
  >,
) => {
  return useMutation(FormBuilderAPI.updateFormBuilder(id), options);
};

export default useUpdateFormBuilder;
