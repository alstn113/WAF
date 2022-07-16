import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '../../../interfaces';

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
