//imports
import {useState, useEffect} from "react"
import getBrowserFingerprint from "get-browser-fingerprint"
import Axios                 from "axios"
import { v4 as uuid_v4 }     from "uuid"
import { io }                from "socket.io-client"

//global variables
const socket = io("https://cpa-analytics-server-2-w6wi6.ondigitalocean.app")

//main function
const useAnalytics = (niche) => {
    //visitor Browser Info
    const [os, setOs]                       = useState(false)
    const [screen, setScreen]               = useState(false)
    const [path, setPath]                   = useState(false)
    const [isReturn, setReturn]             = useState(false)
    const [browser, setBrowser]             = useState(false)
    const [lang, setLang]                   = useState(false)
    const [fingerprint, setFingerprint]     = useState(false)
    const [domain, setDomain]               = useState(false)
    const [referrer, setRef]                = useState(false)
    const [clientTime, setClientTime]       = useState(new Date())
    const [reqId, setReqId]                 = useState(uuid_v4())
    const [live, setLive]                   = useState(true)
    const [trafficType, setTrafficType]     = useState('free')
    const [trafficSource, setTrafficSource] = useState('direct')
    const [campName, setCampName]           = useState('')

    const [timeSpent, setTimeSpent]     = useState(0)

    //timeOut handler (for confirming connection + updating time)
    let myX = null
    let hiddenInterval = null

    //classes
    class Actions{
        constructor(){this.buttons_clicked = [];this.errors = [];this.pages_visited = [];this.locker_clicked = false;this.niche = niche ? niche : ''}
        async addBtn(btn_name){
            this.buttons_clicked.push(btn_name)
            await Axios({
                method : 'PUT',
                url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-btns',
                data   : {
                    reqId : reqId,
                    btns  : this.buttons_clicked
                }
            })
        }
        async addErr(err_name){
            this.errors.push(err_name)
            await Axios({
                method : 'PUT',
                url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-errs',
                data   : {
                    reqId : reqId,
                    errs  : this.errors
                }
            })
        }
        async addPage(page_name){
            this.pages_visited.push(page_name)
            await Axios({
                method : 'PUT',
                url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-pages',
                data   : {
                    reqId : reqId,
                    pages : this.pages_visited
                }
            })
        }
        getAllBtns(){return this.buttons_clicked}
        getAllErrs(){return this.errors}
        getAllPages(){return this.pages_visited}
        isLocker(){return this.locker_clicked}
        async locker(){
            this.locker_clicked = true
            setLive(false)
            await Axios({
                method : 'PUT',
                url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-locker',
                data   : {
                    reqId     : reqId,
                    timeSpent : timeSpent
                }
            })
        }
        setNiche(niche){
            this.niche = niche
            console.log(niche)
            setTimeout(()=>{
                Axios({
                    method : 'PUT',
                    url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-niche',
                    data   : {
                        reqId: reqId,
                        niche: this.niche
                    }
                })
            }, 2000)
        }
        getNiche(){return this.niche}
    }

    //main variable containing all the visitor Browser Data (os, browser, language ...)
    const [visitor, setVisitor] = useState(false)
    //main variable containing all the pages Data (buttons clicked, pages visited & errors)
    const [actions, setActions] = useState(new Actions())

    //functions
    const getURLParams = ()=>{
        let params = window.location.search
        if(params){
            params = params.replace('?','')
            params = params.replace(/%20/g,' ')
            params = params.split('&')
            let result = {}
            params.forEach(elt => {
                const object = elt.split('=')
                result[object[0]] = object[1]
            })
            return result
        }
        return false
    }

    //useEffect
    useEffect(() => {
        //socket config
        console.log(socket)

        if(getURLParams() !== false){
            console.log('url variables not empty')
            if(getURLParams().campName) {setCampName(getURLParams().campName)}
            if(getURLParams().trafficSource) {setTrafficSource(getURLParams().trafficSource)}
            if(getURLParams().trafficType) {setTrafficType(getURLParams().trafficType)}
        }
        setInterval(e => setTimeSpent(++timeSpent), 1000)
        //get all browser data and assign'em
        setOs(window.navigator.platform.toLocaleLowerCase().includes('linux') ? 'Android' : window.navigator.platform)
        setScreen(`${window.outerWidth} x ${window.outerHeight}`)
        setPath(window.location.pathname)
        if(localStorage.getItem('isReturn')) setReturn(true)
        else localStorage.setItem('isReturn', true)
        if(navigator.userAgent.match(/chrome|chromium|crios/i)) setBrowser('Chrome')
        else if(navigator.userAgent.match(/firefox|fxios/i))    setBrowser('Firefox')
        else if(navigator.userAgent.match(/safari/i))           setBrowser('Safari')
        else if(navigator.userAgent.match(/opr\//i))            setBrowser('Opera')
        else if(navigator.userAgent.match(/edg/i))              setBrowser('Edge')
        else setBrowser(navigator.userAgent)
        setLang(window.navigator.language)
        setDomain(window.location.hostname)
        setRef(document.referrer)
        setFingerprint(getBrowserFingerprint())
        
        //listen for when user lose focus on page
        document.addEventListener('visibilitychange', async()=>{
            let myTimeout = null
            if(document.visibilityState === 'visible') {
                clearTimeout(myTimeout)
                clearTimeout(hiddenInterval)
                console.log('i m not telling the server to close the connection because you are back :)')
                Axios({
                    method : 'PUT',
                    url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-back',
                    data   :  {
                        reqId: reqId
                    }
                })
                socket.emit('update-back')

            }
            if(document.visibilityState === 'hidden'){
                //close connection after 60 seconds (FOR ANDROID FIX)
                console.log('I will tell the server to close the connection if you didn t get back in 60 seconds')
                hiddenInterval = setTimeout(()=>{
                    console.log('connection closed my friend, because you didnt response in 60 seonds when focus losed')
                    socket.emit('close-connection')
                }, 60000)

                myTimeout = setTimeout(e => {
                    Axios({
                        method : 'PUT',
                        url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/close-connection',
                        data   :  {
                            reqId: reqId
                        }
                    })
                }, 60000)
                console.log('lose focus')
                Axios({
                    method : 'PUT',
                    url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-focus',
                    data   :  {
                        reqId: reqId,
                        timeSpent: timeSpent
                    }
                })
                Axios({
                    method : 'PUT',
                    url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-time',
                    data   :  {
                        reqId: reqId,
                        timeSpent: timeSpent
                    }
                })
            }
        })
    }, [])

    useEffect(() => {
        if(visitor){
            console.log(visitor)
            socket.emit('reqId', reqId)
            setTimeout(async()=>{
                Axios({
                    method : 'POST',
                    url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/new-connection',
                    data   :  visitor
                })
                let time_spent = 5
                myX = setInterval(async()=>{
                    //update time every 5 seconds 
                    console.log('updating time spent to : ' + time_spent)
                    socket.emit('validate-connectivity')
                    Axios({
                        method : 'PUT',
                        url    : 'https://cpa-analytics-server-2-w6wi6.ondigitalocean.app/update-time',
                        data   :  {
                            reqId: reqId,
                            timeSpent: time_spent
                        }
                    })
                    time_spent = time_spent + 5
                }, 5000)
            }, 1000)
        }
    }, [visitor])

    useEffect(() => {
        //assign all the data to the main variable => visitor
        if(os!==false && screen!==false && path!==false && browser!==false && lang!==false && fingerprint!==false && clientTime!==false && domain!==false && referrer!==false){
            const temp_visitor = {
                reqId         : reqId,
                os            : os,
                screen        : screen,
                path          : path,
                browser       : browser,
                lang          : lang,
                fingerprint   : fingerprint,
                clientTime    : clientTime,
                isReturn      : isReturn,
                domain        : domain,
                referrer      : referrer,
                trafficType   : trafficType,
                trafficSource : trafficSource,
                campName      : campName,
                niche         : actions.getNiche()
            }
            setVisitor(temp_visitor)
        }
    }, [os, screen, path, browser, lang, fingerprint, clientTime, domain, referrer])
    


    //main return
    return [visitor, timeSpent, actions]
}

export default useAnalytics