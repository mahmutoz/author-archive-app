import Avatar from "src/components/Avatar/Avatar";
import Title from "src/components/Title/Title";
import styles from "src/components/CommentItem/CommentItem.module.scss";
import PropTypes from "prop-types";

const CommentItem = ({ commentTopic, commentContent, commentEmail }) => {
  return (
    <li className={styles.comment}>
      <div className={styles.comment__header}>
        <figure className={styles.comment__img}>
          <Avatar src={""} />
        </figure>
        <div className={styles.comment__info}>
          <Title as={"h4"}>{commentTopic}</Title>
          <small>
            <a href={`mailto:${commentEmail}`}>{commentEmail}</a>
          </small>
        </div>
      </div>
      <p className={styles.comment__content}>{commentContent}</p>
    </li>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  commentTopic: PropTypes.string.isRequired,
  commentContent: PropTypes.string.isRequired,
  commentEmail: PropTypes.string.isRequired
};
