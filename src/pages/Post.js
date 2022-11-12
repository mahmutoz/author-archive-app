import PostDetail from "src/components/PostDetail/PostDetail";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return <PostDetail postId={+id} />;
};

export default Post;
