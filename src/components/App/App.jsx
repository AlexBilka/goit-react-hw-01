import Profile from '../Profile/Profile';
import userData from '../userData.json';

export default function App() {
  console.log(userData);
  return (
    <>
      <Profile userData={userData} />
    </>
  );
}
