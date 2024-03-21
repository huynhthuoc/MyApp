import { useContext } from "react"
import { Context } from "./context"

export const useStoreContext = () => {
    return useContext(Context)
}
