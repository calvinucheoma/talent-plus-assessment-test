import { Avatar } from '@mui/material';
import './Community.scss';
import girl1 from '../../assets/jpg/girl1.jpg';
import boy3 from '../../assets/jpg/boy3.jpg';
import girl3 from '../../assets/jpg/girl3.jpg';
import man1 from '../../assets/jpg/man1.jpg';
import girl4 from '../../assets/jpg/girl4.jpg';
import boy4 from '../../assets/jpg/boy4.jpg';
import woman1 from '../../assets/jpg/woman1.jpg';
import woman2 from '../../assets/jpg/woman2.jpg';
import girl5 from '../../assets/jpg/girl5.jpg';
import boy2 from '../../assets/jpg/boy2.jpg';

const Community = () => {
  return (
    <div className="community" id="community">
      <h6>join our community</h6>
      <h1>
        are you ready to connect with the future
        <br /> talent of the tech world
      </h1>
      <h6 className="text-header">
        meet up with other techstars and grow together
      </h6>
      <div className="community__avatars">
        <Avatar src={girl1} alt="student img" className="user-Avatar1" />
        <Avatar src={boy3} alt="student img" className="user-Avatar2" />
        <Avatar src={girl3} alt="student img" className="user-Avatar3" />
        <Avatar src={man1} alt="student img" className="user-Avatar4" />
        <Avatar src={girl4} alt="student img" className="user-Avatar5" />
        <Avatar src={boy4} alt="student img" className="user-Avatar6" />
        <Avatar src={woman1} alt="student img" className="user-Avatar7" />
        <Avatar src={woman2} alt="student img" className="user-Avatar8" />
        <Avatar src={girl5} alt="student img" className="user-Avatar9" />
        <Avatar src={boy2} alt="student img" className="user-Avatar10" />
      </div>
      <button>join our community</button>
    </div>
  );
};

export default Community;
