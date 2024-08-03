// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

import HomeAboutMeCard from '../components/HomeAboutMeCard';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div>
      <HomeAboutMeCard />
    </div>
  );
}

export default Home;
