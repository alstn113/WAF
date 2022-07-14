import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import useGetFormBuilder from '../libs/hooks/queries/form-builder/useGetFormBuilder';

const Form = () => {
  const params = useParams<{ formId: string }>();
  const formId = params.formId as string;
  const { data, isLoading, error } = useGetFormBuilder(formId);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error.response?.data.message}</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Form;
