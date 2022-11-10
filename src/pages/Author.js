import PostList from "src/components/PostList/PostList";
import { useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();

  return <PostList authorId={id} />;
};

export default Author;
