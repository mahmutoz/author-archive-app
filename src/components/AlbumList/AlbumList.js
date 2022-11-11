import useApi from "src/hooks/useApi";
import { AlbumService } from "src/api/services";
import { useEffect } from "react";
import PropTypes from "prop-types";
import AlbumItem from "src/components/AlbumItem/AlbumItem";
import styles from "src/components/AlbumList/AlbumList.module.scss";

const AlbumList = ({ authorId }) => {
  const getAlbumApi = useApi(AlbumService.getAlbum);

  useEffect(() => {
    getAlbumApi.request({ userId: authorId });
  }, []);

  return (
    <ul className={styles.albums}>
      {getAlbumApi?.data?.map((album) => (
        <AlbumItem key={album.id} albumTitle={album.title}></AlbumItem>
      ))}
    </ul>
  );
};

export default AlbumList;

AlbumList.propTypes = {
  authorId: PropTypes.number.isRequired
};
