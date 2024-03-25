import ContentfulImage from './ContentfulImage';

const Avatar = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-10 w-10">
        <ContentfulImage
          src={picture}
          layout="fill"
          className="m-0 rounded-full"
          alt={name}
        />
      </div>
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default Avatar;
