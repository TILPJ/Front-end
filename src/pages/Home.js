import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FirstSection from '../components/home/FirstSection';
import SecondSection from '../components/home/SecondSection';
import ThirdSection from '../components/home/ThirdSection';

const Home = () => {
  const history = useHistory();
  const { userToken } = useSelector(({ user }) => ({
    userToken: user.token,
  }));
  useEffect(() => {
    if (userToken !== '') {
      history.push('/lectures');
    }
  }, [userToken]);

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default Home;
