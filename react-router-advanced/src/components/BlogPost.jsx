import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <div>Viewing Blog Post ID: {id}</div>;
};

export default BlogPost;