import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilder } from '../../../interfaces';

const useDeleteFormBuilder = (
  options?: UseMutationOptions<IFromBuilder, ICustomAxiosError, string>,
) => {
  return useMutation(FormBuilderAPI.deleteFormBuilder, options);
};

export default useDeleteFormBuilder;
