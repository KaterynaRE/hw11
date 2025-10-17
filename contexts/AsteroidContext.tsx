import React, { createContext, useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";

export const AsteroidContext = createContext(null);

const AsteroidProvider = ({ children }) => {
  const db = useSQLiteContext();
  const [asteroid, setAsteroid] = useState([]);

  useEffect(() => {
    if (!db) return;

    const initDB = async () => {
      try {
        await db.execAsync(`
          CREATE TABLE IF NOT EXISTS asteroids (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ObjectT TEXT,
            Close_Approach_Date TEXT,
            CA_Distance_Nominal TEXT,
            CA_Distance_Minimum TEXT,
            relative TEXT,
            infinity TEXT,
            H_mag TEXT,
            Diameter TEXT
          );
        `);
        //console.log("Table 'asteroids' ready");
        // const count = await db.getFirstAsync(
        //   "SELECT COUNT(*) as c FROM asteroids"
        // );
        await getAsteroids();
      } catch (error) {
        console.error(" DB init error:", error);
      }
    };
    initDB();
  }, [db]);

  const getAsteroids = async () => {
    try {
      const result = await db.getAllAsync("SELECT * FROM asteroids");
      //console.log("Loaded from DB:", result);
      setAsteroid(result);
      return result;
    } catch (error) {
      console.error(" DB read error:", error);
    }
  };

  const createAsteroid = async (item) => {
    //console.log("Inserting item:", item);
    try {
      const result = await db.runAsync(
        `INSERT INTO asteroids 
        (ObjectT, Close_Approach_Date, CA_Distance_Nominal, CA_Distance_Minimum, relative, infinity, H_mag, Diameter)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          item.ObjectT,
          item.Close_Approach_Date,
          item.CA_Distance_Nominal,
          item.CA_Distance_Minimum,
          item.relative,
          item.infinity,
          item.H_mag,
          item.Diameter,
        ]
      );
      await getAsteroids();
    } catch (error) {
      console.error("DB insert error:", error);
    }
  };

  const getAsteroidById = async (id) => {
    try {
      const result = await db.getFirstAsync(
        "SELECT * FROM asteroids WHERE id = ?",
        [id]
      );
      return result;
    } catch (error) {
      console.error("DB get by ID error:", error);
    }
  };

  const deleteAsterId = async (id) => {
    //console.log("id", id);
    try {
      await db.runAsync("DELETE FROM asteroids WHERE id = ?", [id]);
      await getAsteroids();
    } catch (error) {
      console.error("DB delete error:", error);
    }
  };

  const updateAster = async (id, item) => {
    try {
      await db.runAsync(
        `UPDATE asteroids 
       SET ObjectT = ?, 
           Close_Approach_Date = ?, 
           CA_Distance_Nominal = ?, 
           CA_Distance_Minimum = ?, 
           relative = ?, 
           infinity = ?, 
           H_mag = ?, 
           Diameter = ?
       WHERE id = ?;`,
        [
          item.ObjectT ?? "",
          item.Close_Approach_Date ?? "",
          item.CA_Distance_Nominal ?? "",
          item.CA_Distance_Minimum ?? "",
          item.relative ?? "",
          item.infinity ?? "",
          item.H_mag ?? "",
          item.Diameter ?? "",
          id,
        ]
      );
      await getAsteroids();
    } catch (error) {
      console.error("DB update error:", error);
    }
  };

  return (
    <AsteroidContext.Provider
      value={{
        asteroid,
        createAsteroid,
        getAsteroids,
        getAsteroidById,
        deleteAsterId,
        updateAster,
      }}
    >
      {children}
    </AsteroidContext.Provider>
  );
};

export default AsteroidProvider;
