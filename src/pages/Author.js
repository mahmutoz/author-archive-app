import PostList from "src/components/PostList/PostList";
import { useParams } from "react-router-dom";
import AlbumList from "../components/AlbumList/AlbumList";
import Title from "../components/Title/Title";

const Author = () => {
  const { id } = useParams();

  return (
    <>
      <Title as={"h2"} className={"title center"}>
        Posts
      </Title>
      <PostList authorId={+id} />
      <Title as={"h2"} className={"title center"}>
        Albums
      </Title>
      <AlbumList authorId={+id} />
    </>
  );
};

export default Author;
