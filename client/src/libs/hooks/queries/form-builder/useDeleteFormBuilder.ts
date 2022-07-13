import { useMutation, UseMutationOptions } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilder } from '../../../interfaces';

const useDeleteFormBuilder = (
  id: string,
  options: UseMutationOptions<IFromBuilder, ICustomAxiosError>,
) => {
  return useMutation(() => FormBuilderAPI.deleteFormBuilder(id), options);
};

export default useDeleteFormBuilder;
