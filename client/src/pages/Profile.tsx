import { Container } from '@chakra-ui/react';
import useAuthStore from '../store/useAuthStore';

const Profile = () => {
  const { currentUser } = useAuthStore();
  return (
    <Container
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'32'}
    >
      <div>
        <div>{currentUser?.id}</div>
        <div>{currentUser?.username}</div>
        <div>{currentUser?.provider}</div>
        <div>{currentUser?.socialId}</div>
      </div>
    </Container>
  );
};

export default Profile;
