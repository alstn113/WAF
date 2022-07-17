import Loading from '@components/Loading/Loading';
import useGetFormBuilders from '@libs/hooks/queries/form-builder/useGetFormBuilders';
import { useNavigate } from 'react-router-dom';
import useCreateFormBuilder from '@libs/hooks/queries/form-builder/useCreateFormBuilder';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from '@components/ErrorFallBack/ErrorFallBack';
import { MESSAGE } from '@src/config/message';
import { Suspense } from 'react';
import * as S from './MyPage.styles';
import MyPageContent from './MyPageContent/MyPageContent';

const MyPage = () => {
  const navigate = useNavigate();

  const { mutate: createMutate } = useCreateFormBuilder({
    onSuccess: (data) => {
      navigate(`/form/${data.id}`);
    },
  });

  return (
    <ErrorBoundary
      fallback={
        <ErrorFallBack
          message={MESSAGE.ERROR.LOAD_DATA}
          queryKey={useGetFormBuilders.getKey()}
        />
      }
    >
      <Suspense fallback={<Loading />}>
        <S.NewFormWrapper>
          <div>새로운 양식으로 시작하기</div>
          <S.FlexRow>
            <S.WrapperItem
              onClick={() =>
                createMutate({
                  title: '제목없는 설문지',
                  description: '설문지 설명',
                  formList:
                    '[{ "question": "질문", "type": "단답형", "answer": [] }]',
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
      </Suspense>
    </ErrorBoundary>
  );
};

export default MyPage;
