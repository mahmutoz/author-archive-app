import PropTypes from "prop-types";
import styles from "src/components/Post/Post.module.scss";

const Post = ({ postTitle, postContent }) => {
  return (
    <li className={styles.post}>
      <img
        src="https://via.placeholder.com/280"
        alt={postTitle}
        width={280}
        height={158}
      />
      <h2>{postTitle}</h2>
      <p>{postContent.slice(0, 60) + "..."}</p>
    </li>
  );
};

export default Post;

Post.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired
};
