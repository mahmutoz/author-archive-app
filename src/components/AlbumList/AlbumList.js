import useApi from "src/hooks/useApi";
import { AlbumService } from "src/api/services";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AlbumItem from "src/components/AlbumItem/AlbumItem";
import styles from "src/components/AlbumList/AlbumList.module.scss";
import ReactPaginate from "react-paginate";
import EmptyData from "src/components/EmptyData/EmptyData";

const AlbumList = ({ authorId, itemsPerPage }) => {
  const getAlbumApi = useApi(AlbumService.getAlbum);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    getAlbumApi.request({ userId: authorId });
  }, []);

  const data = getAlbumApi?.data;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems?.length > 0 ? (
        <>
          <ul className={styles.albums}>
            {currentItems?.map((album) => (
              <AlbumItem
                key={album.id}
                albumId={album.id}
                albumTitle={album.title}
              ></AlbumItem>
            ))}
          </ul>
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      ) : (
        <EmptyData>No Album</EmptyData>
      )}
    </>
  );
};

export default AlbumList;

AlbumList.propTypes = {
  authorId: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};
