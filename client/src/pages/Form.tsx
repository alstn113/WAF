import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import useGetFormBuilder from '../libs/hooks/queries/form-builder/useGetFormBuilder';
import userFormBuilderStore from '../libs/store/useFormBuilderStore';

const Form = () => {
  const params = useParams<{ formId: string }>();
  const formId = params.formId as string;
  const { setFormBuilder, title, description, formList } =
    userFormBuilderStore();
  const { isLoading, error } = useGetFormBuilder(formId, {
    onSuccess: (data) => {
      setFormBuilder({
        title: data.title,
        description: data.description,
        formList: data.formList,
      });
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error.response?.data.message}</div>;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{JSON.stringify(formList)}</div>
    </div>
  );
};

export default Form;
