import girl1 from '../../assets/jpg/girl1.jpg';
import girl2 from '../../assets/jpg/girl2.jpg';
import girl3 from '../../assets/jpg/girl3.jpg';
import boy1 from '../../assets/jpg/boy1.jpg';
import boy2 from '../../assets/jpg/boy2.jpg';
import { Avatar, AvatarGroup } from '@mui/material';

const avatars = [
  { src: girl1 },
  { src: boy1 },
  { src: girl2 },
  { src: boy2 },
  { src: girl3 },
];

const AvatarGroups = () => {
  return (
    <>
      <AvatarGroup>
        {avatars.map((avatar, index) => (
          <Avatar key={index} src={avatar.src} />
        ))}
      </AvatarGroup>
    </>
  );
};

export default AvatarGroups;
