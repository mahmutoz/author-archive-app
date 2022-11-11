import useApi from "src/hooks/useApi";
import { AlbumService } from "src/api/services";
import { useEffect } from "react";
import PropTypes from "prop-types";

const AlbumList = ({ authorId }) => {
  const getAlbumApi = useApi(AlbumService.getAlbum);

  useEffect(() => {
    getAlbumApi.request({ userId: authorId });
  }, []);

  return (
    <ul>
      {getAlbumApi?.data?.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
};

export default AlbumList;

AlbumList.propTypes = {
  authorId: PropTypes.number.isRequired
};
