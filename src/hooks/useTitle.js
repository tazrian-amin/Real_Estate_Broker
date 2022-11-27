import { useEffect } from "react"

// Custom hook for showing dynamic page title
const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - Your Realtor`;
    }, [title])

}

export default useTitle;