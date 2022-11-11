import PostList from "src/components/PostList/PostList";
import { useParams } from "react-router-dom";
import AlbumList from "src/components/AlbumList/AlbumList";
import Title from "src/components/Title/Title";

const Author = () => {
  const { id } = useParams();

  return (
    <>
      <Title as={"h2"} className={"title center"}>
        Posts
      </Title>
      <PostList authorId={+id} itemsPerPage={4} />
      <Title as={"h2"} className={"title center"}>
        Albums
      </Title>
      <AlbumList authorId={+id} itemsPerPage={4} />
    </>
  );
};

export default Author;
