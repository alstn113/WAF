import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '@libs/api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '@libs/interfaces';

const useDeleteFormBuilder = (
  options?: UseMutationOptions<IFromBuilderResponse, ICustomAxiosError, string>,
) => {
  return useMutation(FormBuilderAPI.deleteFormBuilder, options);
};

export default useDeleteFormBuilder;
