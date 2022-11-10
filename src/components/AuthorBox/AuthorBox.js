import Avatar from "src/components/Avatar/Avatar";
import PropTypes from "prop-types";
import styles from "src/components/AuthorBox/AuthorBox.module.scss";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const AuthorBox = ({ authorId, authorFullName }) => {
  const { author } = routes;

  return (
    <li className={styles.author}>
      <Link className={styles.author__action} to={`${author.path}/${authorId}`}>
        <Avatar src={""} width={36} height={36} />
        <h2 className={styles.author__title}>
          <strong>{authorFullName}</strong>
        </h2>
      </Link>
    </li>
  );
};

export default AuthorBox;

AuthorBox.propTypes = {
  authorId: PropTypes.number.isRequired,
  authorFullName: PropTypes.string.isRequired
};
