//imports
import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon   from '@mui/icons-material/Apple'
import {useState}  from 'react'
import Error       from './error'

const English = () => {
    //useStates hooks
    const [device, setDevice] = useState(false)
    const [userId, setUserId] = useState(false)
    const [zoneId, setZoneId] = useState(false)
    
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    //functions
    const next_1 = ()=>{
        if(!device) {
            setError('You should choose your device before continue')
            setTimeout(()=>{
                setError(false)
            },5000)
            return 0
        }
        if(!userId) {
            setError('You should enter your user ID before continue (you can find it in the settings of your mobile legends account)')
            setTimeout(()=>{
                setError(false)
            },5000)
            return 0
        }
        if(!zoneId) {
            setError('You should choose your server ID before continue (you can find it in the settings of your mobile legends account)')
            setTimeout(()=>{
                setError(false)
            },5000)
            return 0
        }
    }

    //main render
    return (
        <div>
            <h1 className="justify-center mb-3 text-lg font-bold">Free Mobile Legends Diamonds Generator</h1>

            {/* S T E P   1 */}
            {error ? <Error msg={error}/> : 
            <div className="py-3">

                {/* BOX 1 */}
                <div className="w-full pb-4 bg-white text-center bg-opacity-40 rounded-md shadow-lg justify-center text-white">
                    <h1 className="py-2 text-xl font-bold">Choose your device</h1>
                    <div className="flex py-3 px-10 flex-1 text-center justify-center align-middle">
                        <div onClick={e => setDevice('Android')} className={`${device == 'Android' && 'bg-white text-gray-500 border-gray-500'} cursor-pointer border-2 mx-2 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <AndroidIcon />
                            <div>Android</div>
                        </div>
                        <div onClick={e => setDevice('iPhone')} className={`${device == 'iPhone' && 'bg-white text-gray-500 border-gray-500'} cursor-pointer border-2 mx-2 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <AppleIcon />
                            <div>iPhone</div>
                        </div>
                    </div>
                </div>

                {/* BOX 2 */}
                <div className="mt-5 w-full pb-4 bg-white text-center bg-opacity-40 rounded-md shadow-lg justify-center text-white">
                    <h1 className="py-2 text-xl font-bold">Enter your user ID & server ID</h1>
                    <img src="/images/user-id-help.jpg" className='py-2 px-4' alt="" />
                    <div className="text-center justify-center align-middle">
                        <input type="number" onChange={e => setUserId(e.target.value)} className='mx-2 my-2 px-3 py-2 rounded-md shadow-lg border-2 bg-black bg-opacity-70 border-black' placeholder='User ID ... (123456789)'/>
                        <input type="number" onChange={e => setZoneId(e.target.value)} className='mx-2 my-2 px-3 py-2 rounded-md shadow-lg border-2 bg-black bg-opacity-70 border-black' placeholder='Server ID ... (1234)'/>
                    </div>
                </div>

                {/* NEXT BUTTON */}
                <button className='mt-4 bg-blue-500 py-3 px-10 rounded-md shadow-lg' onClick={next_1}>Next</button>
            </div>
            }
        </div>
    )
}

export default English
