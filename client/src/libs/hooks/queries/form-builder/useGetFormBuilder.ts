import { useQuery, UseQueryResult } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '../../../interfaces';

const useGetFormBuilder = (
  id: string,
): UseQueryResult<IFromBuilderResponse, ICustomAxiosError> => {
  return useQuery(['GetFormBuilder', id], () =>
    FormBuilderAPI.getFormBuilder(id),
  );
};

useGetFormBuilder.getKey = (id: string) => ['GetFormBuilder', id];

export default useGetFormBuilder;
