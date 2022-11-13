import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import PropTypes from "prop-types";
import styles from "src/components/Photo/Photo.module.scss";

const Photo = ({ imageIndex, allImage, thumbnailUrl, imgTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.photo}>
      <button
        className={styles.photo__btn}
        title={imgTitle}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <img src={thumbnailUrl} alt={imgTitle} width={150} height={150} />
      </button>
      {isOpen && (
        <Lightbox
          images={allImage}
          startIndex={imageIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </li>
  );
};

export default Photo;

Photo.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  allImage: PropTypes.array.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imgTitle: PropTypes.string
};
