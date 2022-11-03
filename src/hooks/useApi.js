import { useMainContext } from "@src/context/MainContext.js";
import { useState } from "react";

export default (apiFunc) => {
  const { loading, setLoading, errorMsg, setErrorMsg } = useMainContext();
  const [data, setData] = useState();

  const request = async (params) => {
    setLoading(true);
    try {
      const result = await apiFunc(params);
      setData(result.data);
    } catch (err) {
      setErrorMsg(err.message || "An unexpected error has occurred!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    errorMsg,
    loading,
    request,
  };
};
