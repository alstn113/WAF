import Sidebar from '@components/Form/Sidebar/Sidebar';
import FormItem from '@components/Form/FormItem/FormItem';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { Droppable } from 'react-beautiful-dnd';
import * as S from './FormContent.styles';
import useGetFormBuilder from '@libs/hooks/queries/form-builder/useGetFormBuilder';

interface Props {
  formId: string;
}

const FormContent = ({ formId }: Props) => {
  const { title, description, formList, changeFormField, setFormBuilder } =
    userFormBuilderStore();

  const {} = useGetFormBuilder(formId, {
    onSuccess: (data) => {
      setFormBuilder({
        title: data.title,
        description: data.description,
        formList: data.formList,
      });
    },
  });

  return (
    <div>
      <S.Title>
        <input
          type="text"
          value={title}
          width="50%"
          placeholder="제목"
          onChange={(e) => changeFormField('title', e.target.value)}
        />
      </S.Title>
      <S.Description>
        <input
          type="text"
          placeholder="설명"
          value={description}
          width="50%"
          onChange={(e) => changeFormField('description', e.target.value)}
        />
      </S.Description>
      <Sidebar formId={formId} />
      <Droppable droppableId="form-list">
        {(provided, snapshot) => (
          <S.FormListContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {formList?.map((formItem, index) => {
              return (
                <FormItem key={formItem.id} formItem={formItem} index={index} />
              );
            })}
            {provided.placeholder}
          </S.FormListContainer>
        )}
      </Droppable>
    </div>
  );
};

export default FormContent;
