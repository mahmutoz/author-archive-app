import { createContext, useContext } from "react";
import useApi from "src/hooks/useApi";
import { UserService } from "src/api/services";
import { useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getUsersApi = useApi(UserService.getUsers);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getUsersApi.request();
  }, []);

  const getSearchUserResults = () => {
    const userData = getUsersApi?.data;
    return searchValue !== "" && userData
      ? userData?.filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : userData;
  };

  const values = {
    getUsersApi,
    selectedOption,
    setSelectedOption,
    searchValue,
    setSearchValue,
    getSearchUserResults
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
