import styled from '@emotion/styled';
import useFormBuilderStore from '@libs/store/useFormBuilderStore';
import { v4 as uuidv4 } from 'uuid';
import useUpdateFormBuilder from '@libs/hooks/queries/form-builder/uesUpdateFormBuilder';

interface Props {
  formId: string;
}

const Sidebar = ({ formId }: Props) => {
  const { title, description, formList, setFormList } = useFormBuilderStore();

  const onCreate = () => {
    const newFormList = Array.from(formList).concat({
      id: uuidv4(),
      question: 'question',
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
    <SidebarWrapper>
      <div>
        <button onClick={onCreate}>폼 생성</button>
        <button onClick={onSave}>저장</button>
      </div>
    </SidebarWrapper>
  );
};

export const SidebarWrapper = styled.div`
  position: fixed;
  right: 2rem;
  top: 10rem;
  background: #b3ef82;
  border-radius: 1rem;
  padding: 1rem;
  height: 10rem;
`;
export default Sidebar;
