import { createContext, useState } from "react";
import {useQuery} from "@tanstack/react-query"

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  

  const {data: users = [], isLoading, isError,
    error, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/api/users');
            const data = await res.json();
            // console.log("Dataaaaaaaaaaaaaaaaaaa", data)
            return data;
        }
    });

  const userInfo = {
    users,
    isLoading,
    isError,
    error,
    refetch,
  };

  return (
    <DataContext.Provider value={userInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
