import { useQuery, UseQueryOptions } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '../../../interfaces';

const useGetFormBuilders = (
  options?: UseQueryOptions<IFromBuilderResponse[], ICustomAxiosError>,
) => {
  return useQuery<IFromBuilderResponse[], ICustomAxiosError>(
    ['GetFormBuilders'],
    FormBuilderAPI.getFormBuilders,
    options,
  );
};

useGetFormBuilders.getKey = () => ['GetFormBuilders'];

export default useGetFormBuilders;
