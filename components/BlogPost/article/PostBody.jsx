import RichText from '../RichText';

const PostBody = ({ post }) => {
  const { content } = post.fields.title;
  console.log(post.fields);

  return (
    <div className="prose mx-auto">
      <RichText content={content} />
    </div>
  );
};

export default PostBody;
