import { useSelector } from "react-redux";
import { selectUserToken, selectLoggedIN } from "../features/userSlice";


export function UserToken() { return useSelector(selectUserToken) }
export function LoggedIn() { return useSelector(selectLoggedIN) }



