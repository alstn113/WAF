import * as S from './Sidebar.styles';
import useFormBuilderStore from '@libs/store/useFormBuilderStore';
import useUpdateFormBuilder from '@libs/hooks/queries/form-builder/uesUpdateFormBuilder';
import Button from '@src/components/common/Button/Button';

interface Props {
  formId: string;
}

const Sidebar = ({ formId }: Props) => {
  const { title, description, formList, setFormList } = useFormBuilderStore();

  const onCreate = () => {
    const newFormList = Array.from(formList).concat({
      question: '질문',
      type: '단답형',
      answer: [],
    });
    setFormList(newFormList);
  };

  const { mutate: updateMutate } = useUpdateFormBuilder(formId, {
    onSuccess: () => {},
    onError: (e) => {},
  });
  const onSave = () => {
    updateMutate({ title, description, formList: JSON.stringify(formList) });
  };

  return (
    <S.SidebarWrapper>
      <Button size="sm" onClick={onCreate}>
        폼 생성
      </Button>
      <Button size="sm" onClick={onSave}>
        저장
      </Button>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
