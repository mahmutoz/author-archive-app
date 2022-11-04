import Avatar from "src/components/Avatar/Avatar";
import PropTypes from "prop-types";
import styles from "src/components/AuthorBox/AuthorBox.module.scss";

const AuthorBox = ({ authorId, authorFullName }) => {
  return (
    <li className={styles.author}>
      <Avatar src={""} width={36} height={36} />
      <span>
        <strong>{authorFullName}</strong>
      </span>
    </li>
  );
};

export default AuthorBox;

AuthorBox.prototype = {
  authorId: PropTypes.number.isRequired,
  authorFullName: PropTypes.string.isRequired
};
