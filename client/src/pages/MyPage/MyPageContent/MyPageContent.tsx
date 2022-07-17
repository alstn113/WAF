import useGetFormBuilders from '@libs/hooks/queries/form-builder/useGetFormBuilders';
import formatDate from '@libs/utils/formatDate';
import useDeleteFormBuilder from '@libs/hooks/queries/form-builder/useDeleteFormBuilder';
import { Link } from 'react-router-dom';
import * as S from './MyPageContent.styles';
import Button from '@src/components/common/Button/Button';

const MyPageContent = () => {
  const { data, refetch } = useGetFormBuilders();

  const { mutate: deleteMutate } = useDeleteFormBuilder({
    onSuccess: async () => {
      await refetch();
    },
  });

  return (
    <S.Grid>
      {data?.map((formBuilder) => (
        <S.GridItem key={formBuilder.id}>
          <div>
            <Link to={`/form/${formBuilder.id}`}>
              <div>제목 : {formBuilder.title}</div>
              <div>설명 : {formBuilder.description}</div>
              <div>생성일 : {formatDate(formBuilder.createdAt)}</div>
              <div>업데이트일 : {formatDate(formBuilder.updatedAt)}</div>
            </Link>
            <Button size="sm" onClick={() => deleteMutate(formBuilder.id)}>
              삭제
            </Button>
          </div>
        </S.GridItem>
      ))}
    </S.Grid>
  );
};

export default MyPageContent;
