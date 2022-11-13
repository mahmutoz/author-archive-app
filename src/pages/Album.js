import { useParams } from "react-router-dom";
import AlbumDetail from "src/components/AlbumDetail/AlbumDetail";

const Album = () => {
  const { id } = useParams();

  return <AlbumDetail albumId={+id} />;
};

export default Album;
