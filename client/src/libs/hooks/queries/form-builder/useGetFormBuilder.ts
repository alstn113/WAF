import { useQuery, UseQueryResult } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilder } from '../../../interfaces';

const useGetFormBuilder = (
  id: string,
): UseQueryResult<IFromBuilder, ICustomAxiosError> => {
  return useQuery(['GetFormBuilder', id], () =>
    FormBuilderAPI.getFormBuilder(id),
  );
};

useGetFormBuilder.getKey = (id: string) => ['GetFormBuilder', id];

export default useGetFormBuilder;
