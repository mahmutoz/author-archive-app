import useApi from "src/hooks/useApi";
import { PostService } from "src/api/services";
import { useEffect } from "react";
import PropTypes from "prop-types";
import PostItem from "src/components/PostItem/PostItem";
import styles from "src/components/PostList/PostList.module.scss";

const PostList = ({ authorId }) => {
  const getPostApi = useApi(PostService.getPost);

  useEffect(() => {
    getPostApi.request({ userId: authorId });
  }, []);

  return (
    <ul className={styles.posts}>
      {getPostApi?.data?.map((post) => (
        <PostItem key={post.id} postTitle={post.title} postContent={post.body} />
      ))}
    </ul>
  );
};

export default PostList;

PostList.propTypes = {
  authorId: PropTypes.number.isRequired
};
