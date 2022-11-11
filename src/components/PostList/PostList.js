import useApi from "src/hooks/useApi";
import { PostService } from "src/api/services";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PostItem from "src/components/PostItem/PostItem";
import styles from "src/components/PostList/PostList.module.scss";
import ReactPaginate from "react-paginate";

const PostList = ({ authorId, itemsPerPage }) => {
  const getPostApi = useApi(PostService.getPost);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    getPostApi.request({ userId: authorId });
  }, []);

  const data = getPostApi?.data;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className={styles.posts}>
        {currentItems?.map((post) => (
          <PostItem key={post.id} postTitle={post.title} postContent={post.body} />
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
  );
};

export default PostList;

PostList.propTypes = {
  authorId: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};
