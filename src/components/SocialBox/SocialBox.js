import {
  MailLineIcon,
  PhoneLineIcon,
  GlobalLineIcon,
  MapPinLineIcon
} from "src/assets/icon";
import styles from "src/components/SocialBox/SocialBox.module.scss";

const SocialBox = ({ authorEmail, authorPhone, authorWebsite, authorAddress }) => {
  return (
    <ul className={styles.social}>
      <li>
        <a href={`mailto:${authorEmail}`} target="_blank">
          <img src={MailLineIcon} alt="email icon" />
        </a>
      </li>
      <li>
        <a href={`tel:${authorPhone}`} target="_blank">
          <img src={PhoneLineIcon} alt="phone icon" />
        </a>
      </li>
      <li>
        <a href={authorWebsite} target="_blank">
          <img src={GlobalLineIcon} alt="global icon" />
        </a>
      </li>
      <li>
        <a
          href={`https://www.google.com/maps/@${authorAddress.lat},${authorAddress.lng},10z`}
          target="_blank"
        >
          <img src={MapPinLineIcon} alt="map pin icon" />
        </a>
      </li>
    </ul>
  );
};

export default SocialBox;
