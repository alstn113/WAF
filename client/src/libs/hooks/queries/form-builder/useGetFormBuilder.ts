import { useQuery, UseQueryOptions } from 'react-query';
import FormBuilderAPI from '@libs/api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '@libs/interfaces';

const useGetFormBuilder = (
  id: string,
  options?: UseQueryOptions<IFromBuilderResponse, ICustomAxiosError>,
) => {
  return useQuery<IFromBuilderResponse, ICustomAxiosError>(
    ['GetFormBuilder', id],
    () => FormBuilderAPI.getFormBuilder(id),
    options,
  );
};

useGetFormBuilder.getKey = (id: string) => ['GetFormBuilder', id];

export default useGetFormBuilder;
