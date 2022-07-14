import { useQuery, UseQueryResult } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilder } from '../../../interfaces';

const useGetFormBuilders = (): UseQueryResult<
  IFromBuilder[],
  ICustomAxiosError
> => {
  return useQuery(['GetFormBuilders'], FormBuilderAPI.getFormBuilders);
};

useGetFormBuilders.getKey = () => ['GetFormBuilders'];

export default useGetFormBuilders;
