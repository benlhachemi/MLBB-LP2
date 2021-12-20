//imports
import {useState, useEffect} from 'react'
import Axios                 from 'axios'

const useVisitor = () => {
    //variables & hooks
    const [loading, setLoading] = useState(true)
    const [lang, setLang]       = useState(typeof window !== "undefined" ? window.navigator.language : false)

    //functions
    /*const fetch_data = async()=>{
        await Axios({
            method: 'GET',
            url: '/api/hello'
        }).then(res => setVisitor(res.data))
    }*/

    //useEffect
    useEffect(() => {
        setLang(window.navigator.language)
        setLoading(false)
        //fetch_data()
    }, [])

    //main return
    return [lang, loading]
}

export default useVisitor

