import PropTypes from "prop-types";
import styles from "src/components/AlbumItem/AlbumItem.module.scss";
import AlbumPlaceholder from "src/assets/img/album-placeholder.jpg";

const AlbumItem = ({ albumTitle }) => {
  return (
    <li className={styles.album}>
      <img src={AlbumPlaceholder} alt={albumTitle} width={280} height={158} />
      <h2>{albumTitle}</h2>
    </li>
  );
};

export default AlbumItem;

AlbumItem.propTypes = {
  albumTitle: PropTypes.string.isRequired
};
