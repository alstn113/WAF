import * as S from './Form.styles';
import { useParams } from 'react-router-dom';
import Loading from '@src/components/Loading/Loading';
import useGetFormBuilder from '@libs/hooks/queries/form-builder/useGetFormBuilder';
import userFormBuilderStore from '@libs/store/useFormBuilderStore';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import reorder from '@libs/utils/reorder';
import FormItem from '@src/components/Form/FormItem/FormItem';
import Sidebar from '@src/components/Form/Sidebar/Sidebar';

const Form = () => {
  const params = useParams<{ formId: string }>();
  const formId = params.formId as string;
  const {
    setFormList,
    setFormBuilder,
    changeFormField,
    title,
    description,
    formList,
  } = userFormBuilderStore();
  const { isLoading, error } = useGetFormBuilder(formId, {
    onSuccess: (data) => {
      setFormBuilder({
        title: data.title,
        description: data.description,
        formList: data.formList,
      });
    },
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const newFormList = reorder(formList, source.index, destination.index);
    setFormList(newFormList);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>{error.response?.data.message}</div>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.Container>
        <S.Wrapper>
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
                    <FormItem
                      key={formItem.id}
                      formItem={formItem}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </S.FormListContainer>
            )}
          </Droppable>
        </S.Wrapper>
      </S.Container>
    </DragDropContext>
  );
};

export default Form;
