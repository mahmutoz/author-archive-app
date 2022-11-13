import PropTypes from "prop-types";
import styles from "src/components/AlbumItem/AlbumItem.module.scss";
import AlbumPlaceholder from "src/assets/img/album-placeholder.jpg";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const AlbumItem = ({ albumId, albumTitle }) => {
  const { album } = routes;

  return (
    <li className={styles.album}>
      <Link to={`${album.path}/${albumId}`}>
        <img src={AlbumPlaceholder} alt={albumTitle} width={280} height={158} />
        <h2>{albumTitle}</h2>
      </Link>
    </li>
  );
};

export default AlbumItem;

AlbumItem.propTypes = {
  albumId: PropTypes.number.isRequired,
  albumTitle: PropTypes.string.isRequired
};
