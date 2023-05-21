import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Game On | ${title}`;
    }, [title])
}

export default useTitle;