import { useContext } from "react"
import { AppContext } from "../context/DataProvider"

const useApp = () => {
	return useContext(AppContext)
}

export default useApp