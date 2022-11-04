import styles from "src/components/AuthorList/AuthorList.module.scss";
import { useUserContext } from "src/context/UserContext";
import AuthorBox from "src/components/AuthorBox/AuthorBox";

const AuthorList = () => {
  const { getSearchUserResults } = useUserContext();

  const filteredData = getSearchUserResults();

  return (
    <section className={styles.list}>
      <ul>
        {filteredData?.length > 0 ? (
          filteredData?.map((user) => (
            <AuthorBox
              key={user.username}
              authorId={user.id}
              authorFullName={user.name}
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
