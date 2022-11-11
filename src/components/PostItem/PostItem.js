import PropTypes from "prop-types";
import styles from "src/components/PostItem/PostItem.module.scss";

const PostItem = ({ postTitle, postContent }) => {
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

export default PostItem;

PostItem.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired
};
