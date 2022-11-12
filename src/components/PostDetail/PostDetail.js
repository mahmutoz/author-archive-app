import PropTypes from "prop-types";
import useApi from "src/hooks/useApi";
import { PostService, CommentService } from "src/api/services";
import { useEffect } from "react";
import Title from "src/components/Title/Title";
import CommentList from "src/components/CommentList/CommentList";
import styles from "src/components/PostDetail/PostDetail.module.scss";

const PostDetail = ({ postId }) => {
  const getPostApi = useApi(PostService.getPostDetail);
  const getComment = useApi(CommentService.getComment);
  useEffect(() => {
    getPostApi.request({ postId });
    getComment.request({ postId });
  }, []);

  const postData = getPostApi?.data;
  const commentsData = getComment?.data;

  return (
    <article className={styles.post}>
      <div className={styles.post__header}>
        <Title as={"h1"} className={"h1 title center capitalize"}>
          {postData?.title}
        </Title>
        <figure className={styles.post__img}>
          <img src="https://via.placeholder.com/400" alt="" width={960} height={225} />
        </figure>
        <p className={styles.post__content}>{postData?.body}</p>
      </div>
      <Title as={"h2"} className={"title"}>
        Comments
      </Title>
      <CommentList commentsData={commentsData} />
    </article>
  );
};

export default PostDetail;

PostDetail.propTypes = {
  postId: PropTypes.number.isRequired
};
