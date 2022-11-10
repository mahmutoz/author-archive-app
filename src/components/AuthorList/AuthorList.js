import styles from "src/components/AuthorList/AuthorList.module.scss";
import { useAuthorContext } from "src/context/AuthorContext";
import AuthorBox from "src/components/AuthorBox/AuthorBox";

const AuthorList = () => {
  const { getSearchAuthorResults } = useAuthorContext();

  const filteredData = getSearchAuthorResults();

  return (
    <section className={styles.list}>
      <ul>
        {filteredData?.length > 0 ? (
          filteredData?.map((author) => (
            <AuthorBox
              key={author.username}
              authorId={author.id}
              authorFullName={author.name}
            />
          ))
        ) : (
          <li>No Author Info</li>
        )}
      </ul>
    </section>
  );
};

export default AuthorList;
