//imports
import {useState, useEffect} from 'react'
import Axios                 from 'axios'

const useVisitor = () => {
    //variables & hooks
    const [loading, setLoading] = useState(true)
    const [allowed, setAllowed] = useState(false)
    const [lang, setLang]       = useState(typeof window !== "undefined" ? window.navigator.language : false)

    //functions
    const fetch_data = async()=>{
        await Axios({
            method: 'get',
            url: '/api/validation'
        }).then(res => {
            setLoading(false)
            if(!res.data) return 0
            if(res.data.host.includes('localhost')) setAllowed(true)
        })
    }

    //useEffect
    useEffect(() => {
        setLang(window.navigator.language)
        fetch_data()
    }, [])

    //main return
    return [lang, loading, allowed]
}

export default useVisitor

