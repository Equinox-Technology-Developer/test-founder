import Avatar from '../ui/Avatar';
import ContentfulImage from '../ui/ContentfulImage';
import DateComponent from '../ui/DateComponent';

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date } = post.fields;

  return (
    <>
      <h2>{title}</h2>
      <div className="hidden md:mb-10 md:flex md:items-center md:justify-between">
        <Avatar
          name={author.fields.name}
          picture={author.fields.image.fields.file.url}
        />
        <DateComponent dateString={date} className="text-sm text-gray-400" />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={post.fields.featuredImage.fields.file.url}
          width={post.fields.featuredImage.fields.file.details.image.width}
          height={post.fields.featuredImage.fields.file.details.image.height}
        />
      </div>
      <div className="mb-6 flex items-center justify-between md:hidden">
        <Avatar
          name={author.fields.name}
          picture={author.fields.image.fields.file.url}
        />
        <DateComponent dateString={date} className="text-sm text-gray-400" />
      </div>
    </>
  );
};

export default PostHeader;
