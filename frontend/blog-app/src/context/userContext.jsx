import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openAuthForm, setOpenAuthForm] = useState(false);

    useEffect(() => {
        if (user) return;

        const accessToken = localStorage.getItem("token");
        if (!accessToken) {
        setLoading(false);
        return;
        }

        const fetchUser = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
            setUser(response.data);
        } catch (error) {
            console.error("User not authenticated", error);
            clearUser();  
        } finally {
            setLoading(false);
        }
        };

        fetchUser(); 
    }, []);
    //   }, [user]); // Add user to dependency array to re-run effect if user changes

    const updateUser = (userData) => {  
        setUser(userData);
        localStorage.setItem("token",userData.token); // Save Token
        setLoading(false);
    };


    const clearUser = () => {  
        setUser(null);
        setSearchResults([]);
        localStorage.removeItem("token");
    };

  return (
    <UserContext.Provider value={{
        user,
        setUser, 
        loading, 
        // setLoading, 
        openAuthForm, 
        setOpenAuthForm, 
        updateUser,
        clearUser ,
    }}>
    {children}
    </UserContext.Provider>
  );
};

export default UserProvider;