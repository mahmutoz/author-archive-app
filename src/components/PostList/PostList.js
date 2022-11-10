import useApi from "src/hooks/useApi";
import { PostService } from "src/api/services";
import { useEffect } from "react";
import PropTypes from "prop-types";

const PostList = ({ authorId }) => {
  const getPostApi = useApi(PostService.getPost);

  useEffect(() => {
    getPostApi.request({ userId: authorId });
  }, []);

  return (
    <ul>
      {getPostApi?.data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;

PostList.propTypes = {
  authorId: PropTypes.number.isRequired
};
