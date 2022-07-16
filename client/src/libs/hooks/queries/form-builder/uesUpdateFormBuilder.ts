import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import {
  ICustomAxiosError,
  IFormBuilderUpdateRequest,
  IFromBuilderResponse,
} from '../../../interfaces';

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
