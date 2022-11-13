import PropTypes from "prop-types";
import CommentItem from "src/components/CommentItem/CommentItem";
import styles from "src/components/CommentList/CommentList.module.scss";
import EmptyData from "src/components/EmptyData/EmptyData";

const CommentList = ({ commentsData }) => {
  return (
    <>
      {commentsData?.length > 0 ? (
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
      ) : (
        <EmptyData>No Comment</EmptyData>
      )}
    </>
  );
};

export default CommentList;

CommentList.propTypes = {
  commentsData: PropTypes.array.isRequired
};
