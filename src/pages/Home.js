import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import FirstSection from '../components/home/FirstSection';
import SecondSection from '../components/home/SecondSection';
import ThirdSection from '../components/home/ThirdSection';

const Home = () => {
  const { userToken } = useSelector(({ user }) => ({
    userToken: user.token,
  }));
  if (userToken) {
    return <Redirect to="/lectures" />;
  }
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default Home;
