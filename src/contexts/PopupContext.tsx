"use client";

import { createContext, useState, ReactNode } from "react";

interface IPopup {
  getPopup: (id: number) => boolean;
  setPopup: (id: number, action: "show" | "close") => void;
}

export const PopupContext = createContext({} as IPopup);

export default function PopupProvider({ children }: { children: ReactNode }) {
  const [popupList, setPopupList] = useState([false, false, false]);

  const getPopup = (id: number) => popupList[id - 1];

  const setPopup = (id: number, action: "show" | "close") => {
    const newPopupList = [...popupList];
    newPopupList[id - 1] = action === "show" ? true : false;

    return setPopupList(() => [...newPopupList]);
  };

  return (
    <PopupContext.Provider
      value={{
        getPopup,
        setPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
