import React, { createContext, useContext, useEffect, useState } from "react";
import { serverUrl } from "../BrandData";
import axios from "axios";

const AppDataContext = createContext();

const api = axios.create({
  baseURL: serverUrl,

  timeout: 15000,

  headers: {
    "Content-Type": "application/json",
  },
});

const getWebsiteData = async () => {
  const responseCounters = await api.get("/counters");
  const responseProjects = await api.get("/public/projects");
  const responsePricings = await api.get("/pricings");
  return {
    counters: responseCounters.data.data,
    projects: responseProjects.data.data,
    pricings: responsePricings.data.data,
  };
};

export const AppDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [websiteData, setWebsiteData] = useState(null);

  const CACHE_KEY = "website_cache";

  const CACHE_TIME = 10 * 60 * 1000;

  const fetchWebsiteData = async (force = false) => {
    try {
      const cache = localStorage.getItem(CACHE_KEY);

      if (cache && !force) {
        const parsed = JSON.parse(cache);

        const expired = Date.now() - parsed.time > CACHE_TIME;

        if (!expired) {
          setWebsiteData(parsed.data);

          setLoading(false);

          return;
        }
      }

      const data = await getWebsiteData();

      setWebsiteData(data);

      localStorage.setItem(
        CACHE_KEY,

        JSON.stringify({
          time: Date.now(),

          data,
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsiteData();
    // eslint-disable-next-line
  }, []);

  const refreshWebsiteData = () => {
    fetchWebsiteData(true);
  };

  return (
    <AppDataContext.Provider
      value={{
        loading,

        websiteData,

        refreshWebsiteData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
