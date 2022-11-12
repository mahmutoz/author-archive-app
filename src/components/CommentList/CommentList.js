import PropTypes from "prop-types";
import CommentItem from "src/components/CommentItem/CommentItem";
import styles from "src/components/CommentList/CommentList.module.scss";

const CommentList = ({ commentsData }) => {
  return (
    <ul className={styles.comments}>
      {commentsData?.map((comment) => (
        <CommentItem
          key={comment.id}
          commentTopic={comment.name}
          commentContent={comment.body}
          commentEmail={comment.email}
        />
      ))}
    </ul>
  );
};

export default CommentList;

CommentList.propTypes = {
  commentsData: PropTypes.array.isRequired
};
