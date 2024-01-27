import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";

const usePopup = () => useContext(PopupContext);

export default usePopup;
