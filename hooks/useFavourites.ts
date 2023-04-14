import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { use } from "react";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavourites;
