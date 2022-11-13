import Avatar from "src/components/Avatar/Avatar";
import PropTypes from "prop-types";
import styles from "src/components/AuthorBox/AuthorBox.module.scss";
import { Link } from "react-router-dom";
import { routes } from "src/routes";
import Title from "src/components/Title/Title";
import useApi from "src/hooks/useApi";
import { PeopleImageService } from "src/api/services";
import { useEffect } from "react";
import SocialBox from "src/components/SocialBox/SocialBox";

const AuthorBox = ({
  authorId,
  authorFullName,
  authorEmail,
  authorPhone,
  authorWebsite,
  authorAddress
}) => {
  const { author } = routes;

  const getPeopleImageApi = useApi(PeopleImageService.getPeopleImage);

  useEffect(() => {
    getPeopleImageApi.request({ minimum_age: 30 });
  }, []);

  const peopleImageData = getPeopleImageApi?.data;

  return (
    <li className={styles.author}>
      <figure className={styles.author__img}>
        <Avatar src={peopleImageData?.image_url} width={36} height={36} />
      </figure>
      <div className={styles.author__info}>
        <Link className={styles.author__action} to={`${author.path}/${authorId}`}>
          <Title as={"h3"} className={"center"}>
            <strong>{authorFullName}</strong>
          </Title>
        </Link>
        <SocialBox
          authorEmail={authorEmail}
          authorPhone={authorPhone}
          authorWebsite={authorWebsite}
          authorAddress={authorAddress}
        />
        <Link to={`${author.path}/${authorId}`} className={styles.author__btn}>
          Details
        </Link>
      </div>
    </li>
  );
};

export default AuthorBox;

AuthorBox.propTypes = {
  authorId: PropTypes.number.isRequired,
  authorFullName: PropTypes.string.isRequired,
  authorEmail: PropTypes.string.isRequired,
  authorPhone: PropTypes.string,
  authorWebsite: PropTypes.string,
  authorAddress: PropTypes.object
};
