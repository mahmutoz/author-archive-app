import { useEffect } from "react";
import Select from "react-select";
import styles from "src/components/SelectBox/SelectBox.module.scss";
import { useUserContext } from "src/context/UserContext";

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
  const { getUsersApi, selectedOption, setSelectedOption, setSearchValue } =
    useUserContext();

  const formattedUser = () =>
    getUsersApi?.data?.map((item) => {
      return { value: item.id, label: item.name };
    });

  return (
    <Select
      className={styles.select}
      styles={customStyles}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      onInputChange={(value) => setSearchValue(value)}
      options={formattedUser()}
      placeholder="Search Author..."
    />
  );
};

export default SelectBox;
