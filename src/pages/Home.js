import { string } from 'prop-types';
import { Redirect } from 'react-router';
import FirstSection from '../components/home/FirstSection';
import SecondSection from '../components/home/SecondSection';
import ThirdSection from '../components/home/ThirdSection';

const Home = ({ userToken, savedToken }) => {
  if (userToken && savedToken) {
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

Home.propTypes = {
  userToken: string,
  savedToken: string,
};
Home.defaultProps = {
  userToken: '',
  savedToken: '',
};

export default Home;
