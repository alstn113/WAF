import LoadingSpinner from '@components/common/LoadingSpinner/LoadingSpinner';
import useGetFormBuilders from '@libs/hooks/queries/form-builder/useGetFormBuilders';
import formatDate from '@libs/utils/formatDate';
import { Link, useNavigate } from 'react-router-dom';
import useDeleteFormBuilder from '@libs/hooks/queries/form-builder/useDeleteFormBuilder';
import useCreateFormBuilder from '@libs/hooks/queries/form-builder/useCreateFormBuilder';

const MyPage = () => {
  const { data, isLoading, error, refetch } = useGetFormBuilders();
  const navigate = useNavigate();

  const { mutate: deleteMutate } = useDeleteFormBuilder({
    onSuccess: async () => {
      await refetch();
    },
  });

  const { mutate: createMutate } = useCreateFormBuilder({
    onSuccess: (data) => {
      navigate(`/form/${data.id}`);
    },
  });

  if (error) return <div>{error.response?.data.message}</div>;
  return (
    <div>
      <div>
        <div>새로운 양식 시작하기</div>
        <div>
          <div>
            <div>
              <div
                onClick={() =>
                  createMutate({
                    title: '제목없음',
                    description: '설명없음',
                    formList:
                      '[{ "id": "8e77d6a0-a3ee-480d-b34b-b0c3650cc09b", "type": "단답형", "answer": [], "question": "question"}]',
                  })
                }
              >
                내용없음
              </div>
            </div>
            <div>
              <div>템플릿1</div>
            </div>
            <div>
              <div>템플릿2</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            data?.map((formBuilder) => (
              <div key={formBuilder.id}>
                <Link to={`/form/${formBuilder.id}`}>
                  <div>제목 : {formBuilder.title}</div>
                  <div>설명 : {formBuilder.description}</div>
                  <div>생성일 : {formatDate(formBuilder.createdAt)}</div>
                  <div>업데이트일 : {formatDate(formBuilder.updatedAt)}</div>
                </Link>
                <button onClick={() => deleteMutate(formBuilder.id)}>
                  삭제
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
