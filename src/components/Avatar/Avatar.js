import PropTypes from "prop-types";
import AvatarImage from "src/assets/img/avatar.svg";

const Avatar = ({ src, alt, width, height }) => {
  return (
    <img
      src={src || AvatarImage}
      alt={alt || "avatar"}
      width={width || 72}
      height={height || 72}
    />
  );
};

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
