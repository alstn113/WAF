import useGetFormBuilders from '@libs/hooks/queries/form-builder/useGetFormBuilders';
import { useNavigate } from 'react-router-dom';
import useCreateFormBuilder from '@libs/hooks/queries/form-builder/useCreateFormBuilder';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { MESSAGE } from '@src/config/message';
import * as S from './MyPage.styles';
import MyPageContent from './MyPageContent/MyPageContent';
import AsyncBoundary from '@src/components/AsyncBoundary';

const MyPage = () => {
  const navigate = useNavigate();

  const { mutate: createMutate } = useCreateFormBuilder({
    onSuccess: (data) => {
      navigate(`/form/${data.id}`);
    },
  });

  return (
    <AsyncBoundary
      rejectedFallback={
        <ErrorFallback
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetFormBuilders.getKey()}
        />
      }
    >
      <S.NewFormWrapper>
        <div>새로운 양식으로 시작하기</div>
        <S.FlexRow>
          <S.WrapperItem
            onClick={() =>
              createMutate({
                title: '제목없는 설문지',
                description: '설문지 설명',
                formList:
                  '[{ "question": "질문", "type": "단답형", "offeredAnswer": [] }]',
              })
            }
          >
            내용없음
          </S.WrapperItem>
          <S.WrapperItem>템플릿 1</S.WrapperItem>
          <S.WrapperItem>템플릿 2</S.WrapperItem>
        </S.FlexRow>
      </S.NewFormWrapper>
      <MyPageContent />
    </AsyncBoundary>
  );
};

export default MyPage;
