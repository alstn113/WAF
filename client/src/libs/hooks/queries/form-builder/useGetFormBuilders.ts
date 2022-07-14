import { useQuery, UseQueryResult } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '../../../interfaces';

const useGetFormBuilders = (): UseQueryResult<
  IFromBuilderResponse[],
  ICustomAxiosError
> => {
  return useQuery(['GetFormBuilders'], FormBuilderAPI.getFormBuilders);
};

useGetFormBuilders.getKey = () => ['GetFormBuilders'];

export default useGetFormBuilders;
