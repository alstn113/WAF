import { Button, Flex, useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
import useCreateFormBuilder from '../../libs/hooks/queries/form-builder/useCreateFormBuilder';
import useFormBuilderStore from '../../libs/store/useFormBuilderStore';
import { v4 as uuidv4 } from 'uuid';

const Sidebar = () => {
  const toast = useToast();
  const { title, description, formList, setFormList } = useFormBuilderStore();

  const onCreate = () => {
    const newFormList = Array.from(formList).concat({
      id: uuidv4(),
      question: 'question',
      type: 'ShortAnswer',
      answer: [],
    });
    setFormList(newFormList);

    toast({
      title: '폼이 생성되었습니다',
      status: 'success',
      duration: 1500,
      isClosable: true,
    });
  };

  const { mutate } = useCreateFormBuilder({
    onSuccess: () => {
      toast({
        title: '저장되었습니다.',
        status: 'success',
        duration: 1500,
        isClosable: true,
      });
    },
    onError: (e) => {
      toast({
        title: `${e.response?.data.message} [CODE : ${e.response?.data.statusCode}]`,
        status: 'error',
        duration: 1500,
        isClosable: true,
      });
    },
  });
  const onSave = () => {
    mutate({ title, description, formList: JSON.stringify(formList) });
  };

  return (
    <SidebarWrapper>
      <Flex direction={'column'}>
        <Button onClick={onCreate}>폼 생성</Button>
        <Button onClick={onSave} marginTop="1rem">
          저장
        </Button>
      </Flex>
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
