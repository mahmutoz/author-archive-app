import Select from "react-select";
import styles from "src/components/SelectBox/SelectBox.module.scss";
import { useAuthorContext } from "src/context/AuthorContext";
import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";

const customStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    boxShadow: isFocused && "0 0 0 1px var(--primary)",
    borderColor: isFocused ? "var(--primary)" : "rgba(var(--text-rgb),.3)",
    ":hover": {
      borderColor: "var(--primary)"
    }
  }),
  option: (styles, { isSelected, isDisabled, isFocused }) => {
    return {
      ...styles,
      color: isSelected && "var(--text)",
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "var(--bg-primary)"
        : isFocused
        ? "rgba(var(--bg-primary-rgb), .2)"
        : undefined,
      cursor: "pointer"
    };
  }
};

const SelectBox = () => {
  const { getAuthorsApi, selectedOption, setSelectedOption, setSearchValue } =
    useAuthorContext();
  const { author } = routes;
  const navigate = useNavigate();

  const formattedUser = () =>
    getAuthorsApi?.data?.map((item) => {
      return { value: item.id, label: item.name };
    });

  return (
    <>
      <Select
        className={styles.select}
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        onInputChange={(value) => setSearchValue(value)}
        options={formattedUser()}
        placeholder="Search Author..."
      />
      {selectedOption && navigate(`${author.path}/${selectedOption?.value}`)}
    </>
  );
};

export default SelectBox;
