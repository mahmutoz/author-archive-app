import { useEffect, useState } from "react";
import useApi from "src/hooks/useApi";
import { UserService } from "src/api/services";
import Select from "react-select";

const SelectBox = () => {
  const getUsersApi = useApi(UserService.getUsers);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    getUsersApi.request();
    console.log("selectedOption", selectedOption);
  }, []);

  const formattedUser = () =>
    getUsersApi?.data?.map((item) => {
      return { value: item.id, label: item.name };
    });

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={formattedUser()}
      placeholder="Select Author..."
    />
  );
};

export default SelectBox;
