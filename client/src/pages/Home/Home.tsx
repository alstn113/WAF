import Button from '@components/common/Button/Button';
import RadioButton from '@components/common/RadioButton/RadioButton';
import TextInput from '@src/components/common/TextInput/TextInput';

const Home = () => {
  return (
    <div>
      <div>
        <TextInput></TextInput>
      </div>
      <div>
        <Button size="md">가나다</Button>
      </div>
      <RadioButton labelText="sdf" name="same" />
    </div>
  );
};

export default Home;
