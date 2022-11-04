import styles from "src/components/Loading/Loading.module.scss";
import loadingGif from "src/assets/img/loading.gif";
import { useMainContext } from "src/context/MainContext";

const Loading = () => {
  const { loading } = useMainContext();

  return loading ? (
    <section className={styles.loading}>
      <figure>
        <img src={loadingGif} alt="loading" width="320" height="320" />
      </figure>
    </section>
  ) : (
    <></>
  );
};

export default Loading;
