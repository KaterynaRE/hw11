import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const ContextTColor = createContext({
    dark: false,
    tgColor: () => {},
});

const ColorProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const tgColor = async () => {
      const newC = !dark;
      setDark(newC);
      await AsyncStorage.setItem("theme", JSON.stringify(newC));
  } 

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("theme");
        console.log("get storage");

        if (jsonValue != null) {
          const saveTh = JSON.parse(jsonValue);
          if (saveTh != dark) {
            tgColor();
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
  }, []);

  return (
    <ContextTColor.Provider value={{ dark, tgColor }}>
      {children}
    </ContextTColor.Provider>
  );
};

export default ColorProvider;
export const useColor = () => useContext(ContextTColor);