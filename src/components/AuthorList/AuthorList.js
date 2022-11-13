import styles from "src/components/AuthorList/AuthorList.module.scss";
import { useAuthorContext } from "src/context/AuthorContext";
import AuthorBox from "src/components/AuthorBox/AuthorBox";
import EmptyData from "src/components/EmptyData/EmptyData";

const AuthorList = () => {
  const { getSearchAuthorResults } = useAuthorContext();

  const filteredData = getSearchAuthorResults();

  return (
    <section className={styles.list}>
      {filteredData?.length > 0 ? (
        <ul className={styles.list__wrapper}>
          {filteredData?.map((author) => (
            <AuthorBox
              key={author.username}
              authorId={author.id}
              authorFullName={author.name}
            />
          ))}
        </ul>
      ) : (
        <EmptyData>No Author</EmptyData>
      )}
    </section>
  );
};

export default AuthorList;
