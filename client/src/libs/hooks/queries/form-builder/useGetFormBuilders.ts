import { useQuery } from 'react-query';
import FormBuilderAPI from '../../../api/form-builder.api';
import { ICustomAxiosError, IFromBuilderResponse } from '../../../interfaces';

const useGetFormBuilders = () => {
  return useQuery<IFromBuilderResponse[], ICustomAxiosError>(
    ['GetFormBuilders'],
    FormBuilderAPI.getFormBuilders,
  );
};

useGetFormBuilders.getKey = () => ['GetFormBuilders'];

export default useGetFormBuilders;
