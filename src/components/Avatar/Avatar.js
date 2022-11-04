import PropTypes from "prop-types";
import avatar from "src/assets/img/avatar.svg";

const Avatar = ({ src, alt, width, height }) => {
  return (
    <figure>
      <img
        src={src || avatar}
        alt={alt || "avatar"}
        width={width || 72}
        height={height || 72}
      />
    </figure>
  );
};

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
