import PropTypes from "prop-types";
import styles from "src/components/PostItem/PostItem.module.scss";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const PostItem = ({ postId, postTitle, postContent }) => {
  const { post } = routes;

  return (
    <li className={styles.post}>
      <Link to={`${post.path}/${postId}`}>
        <img
          src="https://via.placeholder.com/280"
          alt={postTitle}
          width={280}
          height={158}
        />
        <h2>{postTitle}</h2>
      </Link>
      <p>{postContent.slice(0, 60) + "..."}</p>
    </li>
  );
};

export default PostItem;

PostItem.propTypes = {
  postId: PropTypes.number.isRequired,
  postTitle: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired
};
