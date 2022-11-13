import PropTypes from "prop-types";
import styles from "src/components/EmptyData/EmptyData.module.scss";
import EmptyImg from "src/assets/img/empty-data.svg";

const EmptyData = ({ children }) => {
  return (
    <section className={styles.data}>
      <p>
        <img src={EmptyImg} alt="Empty data icon" />
        {children}
      </p>
    </section>
  );
};

export default EmptyData;

EmptyData.propTypes = {
  children: PropTypes.node.isRequired
};
