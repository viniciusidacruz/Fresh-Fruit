import React, { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import { API } from "common/services/api";

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
  stateActualize?: any,
) {
  const [data, setData] = useState<T | any>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    API
      .get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [stateActualize]);

  return { data, isFetching, error };
}