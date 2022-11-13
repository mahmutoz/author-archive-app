import styles from "src/components/AlbumDetail/AlbumDetail.module.scss";
import PropTypes from "prop-types";
import useApi from "src/hooks/useApi";
import { PhotoService } from "src/api/services";
import { useEffect } from "react";
import Photo from "src/components/Photo/Photo";

const AlbumDetail = ({ albumId }) => {
  const getPhotosApi = useApi(PhotoService.getPhotos);

  useEffect(() => {
    getPhotosApi.request({ albumId: albumId });
  }, []);

  const photoData = getPhotosApi?.data;
  const images = photoData?.map((photo) => {
    return {
      url: photo.url,
      title: photo.title
    };
  });

  return (
    <ul className={styles.photos}>
      {photoData?.map((photo, index) => (
        <Photo
          key={photo.id}
          imageIndex={index}
          allImage={images}
          thumbnailUrl={photo.thumbnailUrl}
          imgTitle={photo.title}
        />
      ))}
    </ul>
  );
};

export default AlbumDetail;

AlbumDetail.propTypes = {
  albumId: PropTypes.number.isRequired
};
