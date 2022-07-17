import useFormBuilderStore from '@libs/store/useFormBuilderStore';

const ModelView = () => {
  const { title, description, formList } = useFormBuilderStore();
  return (
    <div>
      <pre>{JSON.stringify(title, null, '\t')}</pre>
      <pre>{JSON.stringify(description, null, '\t')}</pre>
      <pre>{JSON.stringify(formList, null, '\t')}</pre>
    </div>
  );
};

export default ModelView;
