import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "../FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);
export const FavColor = createContext([]);
export const PersonalDetails = createContext({});

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "Diamond";
  const colors = ["red", "blue", "pink"];
  const person = {
    name: "sokina",
    age: 21,
    hobby: ["dance", "coding"],
  };
  return (
    <div>
      <h2>Family Tree</h2>
      <h4>TK. {money}</h4>
      <div className="family-tree">
        <PersonalDetails value={person}>
          <FavColor value={colors}>
            <MoneyContext value={[money, setMoney]}>
              <AssetContext.Provider value={asset}>
                <Grandpa />
              </AssetContext.Provider>
            </MoneyContext>
          </FavColor>
        </PersonalDetails>
      </div>
    </div>
  );
};

export default FamilyTree;
