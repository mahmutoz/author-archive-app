import { createContext, useContext } from "react";
import useApi from "src/hooks/useApi";
import { AuthorService } from "src/api/services";
import { useState, useEffect } from "react";

const AuthorContext = createContext();

export const AuthorProvider = ({ children }) => {
  const getAuthorsApi = useApi(AuthorService.getAuthors);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAuthorsApi.request();
  }, []);

  const getSearchAuthorResults = () => {
    const authorData = getAuthorsApi?.data;
    return searchValue !== "" && authorData
      ? authorData?.filter((author) =>
          author.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : authorData;
  };

  const values = {
    getAuthorsApi,
    selectedOption,
    setSelectedOption,
    searchValue,
    setSearchValue,
    getSearchAuthorResults
  };

  return <AuthorContext.Provider value={values}>{children}</AuthorContext.Provider>;
};

export const useAuthorContext = () => useContext(AuthorContext);
