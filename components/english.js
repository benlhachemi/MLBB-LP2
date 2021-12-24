//imports
import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon   from '@mui/icons-material/Apple'
import {useState}  from 'react'
import Error       from './error'
import Axios       from 'axios'
import Fetching    from './fetching'
import Success     from './success'
import CheckIcon   from '@mui/icons-material/Check'
import DiamondIcon from '@mui/icons-material/Diamond'

const English = ({actions}) => {
    //useStates hooks
    const [device, setDevice] = useState(false)
    const [userId, setUserId] = useState(false)
    const [zoneId, setZoneId] = useState(false)
    const [user, setUser] = useState(false)
    const [diamonds, setDiamonds] = useState(false)
    
    const [error, setError] = useState(false)
    const [error_2, setError_2] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    //steps
    const [step_1, setStep_1] = useState(true)
    const [step_2, setStep_2] = useState(false)
    const [step_3, setStep_3] = useState(false)

    //functions
    const next_1 = async()=>{
        actions.addBtn('first next button')
        if(!device) {
            setError('You should choose your device before continue')
            setTimeout(()=>{
                setError(false)
            },4000)
            actions.addErr('no device choosen')
            return 0
        }
        if(!userId) {
            setError('You should enter your user ID before continue (you can find it in the settings of your mobile legends account)')
            setTimeout(()=>{
                setError(false)
            },4000)
            actions.addErr('MLBB userId not entred')
            return 0
        }
        if(!zoneId) {
            setError('You should choose your server ID before continue (you can find it in the settings of your mobile legends account)')
            setTimeout(()=>{
                setError(false)
            },4000)
            actions.addErr('MLBB zoneId not entred')
            return 0
        }
        setLoading(true)

        const fetched_data = await fetch('https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "productId": 1,
                "itemId": 66,
                "catalogId": 121,
                "paymentId": 805,
                "gameId": userId,
                "zoneId": zoneId,
                "product_ref_denom": "AE"
            }),
            redirect: 'follow'
        })

        const json_data = await fetched_data.json()
        setLoading(false)
        if(json_data.status.code == 1){
            actions.addErr('MLBB user not found')
            setError('User not found, please re-enter your user ID + zone ID')
            setTimeout(()=>{
                setError(false)
            },4000)
            return 0
        }
        if(json_data.status.code == 0){
            setSuccess(`User ${json_data.data.userNameGame} was found and can receive free Diamonds!`)
            setUser(json_data.data.userNameGame)
            return 0
        }
        
    }

    const next_2 = async()=>{
        actions.addBtn('second next button (after choosing diamonds)')
        if(!diamonds) {
            setError_2('You should choose the amount of Diamonds that you wanna get before continue')
            setTimeout(()=>{
                setError_2(false)
            },4000)
            actions.addErr('no diamonds choosen')
            return 0
        }
        setStep_2(false)
        setStep_3(true)
    }

    //main render
    return (
        <div>
            <h1 className="justify-center mb-3 text-lg font-bold">Free Mobile Legends Diamonds Generator</h1>

            {/* S T E P   1 */}
            {success ? <Success msg={success} setStep_1={setStep_1} setStep_2={setStep_2} setSuccess={setSuccess} question={`is ${user} the correct username of your account ?`} yes={'Yes'} no={'No'}/> : 
            loading ? <Fetching msg={'Looking for your Mobile Legends Username on the Server ...'} /> : 
            error ? <Error msg={error}/> : 
            step_1 &&
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



            {/* S T E P   2 */}
            {error_2 ? <Error msg={error_2}/> : 
            step_2 && 
            <div className="py-3">

                {/* BOX 1 */}
                <div className="w-full pb-4 bg-white text-center bg-opacity-40 rounded-md shadow-lg justify-center text-white">
                    <h1 className="py-2 text-xl font-bold">Choose the amount of diamonds you wanna get for <span className="font-bold text-blue-200">{user}</span></h1>
                    <div className="grid grid-cols-2 py-3 px-10 flex-1 text-center justify-center align-middle">

                        <div onClick={e => setDiamonds(100)} className={`${diamonds == 100 && 'bg-white text-gray-500 border-gray-500'} cursor-pointer my-2 align-text-bottomcursor-pointer border-2 mx-1 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <div>100 Diamonds</div>
                            <center><img src="/images/gems.png" className='w-8 justify-center align-middle' alt="mobile legends diamonds icon" /></center>
                        </div>

                        <div onClick={e => setDiamonds(200)} className={`${diamonds == 200 && 'bg-white text-gray-500 border-gray-500'} cursor-pointer my-2 align-text-bottomcursor-pointer border-2 mx-1 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <div>200 Diamonds</div>
                            <center><img src="/images/gems.png" className='w-8 justify-center align-middle' alt="mobile legends diamonds icon" /></center>
                        </div>

                        <div onClick={e => setDiamonds(500)} className={`${diamonds == 500 && 'bg-white text-gray-500 border-gray-500'} cursor-pointer my-2 align-text-bottomcursor-pointer border-2 mx-1 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <div>500 Diamonds</div>
                            <center><img src="/images/gems.png" className='w-8 justify-center align-middle' alt="mobile legends diamonds icon" /></center>
                        </div>

                        <div onClick={e => setDiamonds(1000)} className={`${diamonds == 1000 && 'bg-white text-gray-500 border-gray-500'} cursor-pointer my-2 align-text-bottomcursor-pointer border-2 mx-1 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <div>1000 Diamonds</div>
                            <center><img src="/images/gems.png" className='w-8 justify-center align-middle' alt="mobile legends diamonds icon" /></center>
                        </div>

                        <div onClick={e => setDiamonds(1999)} className={`${diamonds == 1999 && 'bg-white text-gray-500 border-gray-500'} cursor-pointer my-2 align-text-bottomcursor-pointer border-2 mx-1 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <div>1999 Diamonds</div>
                            <center><img src="/images/gems.png" className='w-8 justify-center align-middle' alt="mobile legends diamonds icon" /></center>
                        </div>

                        <div onClick={e => setDiamonds(2500)} className={`${diamonds == 2500 && 'bg-white text-gray-500 border-gray-500'} cursor-pointer my-2 align-text-bottomcursor-pointer border-2 mx-1 py-2 px-3 rounded-lg hover:bg-white hover:text-gray-500 hover:border-gray-500 active:bg-white active:text-gray-500 active:border-gray-500`}>
                            <div>2500 Diamonds</div>
                            <center><img src="/images/gems.png" className='w-8 justify-center align-middle' alt="mobile legends diamonds icon" /></center>
                        </div>
                    </div>
                </div>

                {/* NEXT BUTTON */}
                <button className='mt-4 bg-blue-500 py-3 px-10 rounded-md shadow-lg' onClick={next_2}>Next</button>
            </div>
            }




            {/* S T E P   3 */}
            {step_3 && 
            <div className="py-3">

                {/* BOX 1 */}
                <div className="w-full pb-4 bg-white text-center bg-opacity-40 rounded-md shadow-lg justify-center text-white">
                    <h1 className="py-2 text-xl font-bold">Generating Free Diamonds for <span className="font-bold text-blue-200">{user}</span></h1>
                    <ul className='mt-3 text-xl'>
                        <li className='my-2'>Username 👉 <span className='font-bold text-blue-300'>{user}</span></li>
                        <li className='my-2'>Device 👉 <span className='font-bold text-blue-300'>{device}</span></li>
                        <li className='my-2'>Diamonds 👉 <span className='font-bold text-blue-300'>{diamonds} <DiamondIcon /></span></li>
                    </ul>
                </div>

                {/* FINISH BUTTON */}
                <button className='mt-4 bg-blue-500 py-3 px-10 rounded-md shadow-lg' onClick={e=>{actions.locker();window.location.href='https://verifyspot.net/cl/i/3759ww'}}>Confirm <CheckIcon /></button>


            </div>
            }
        </div>
    )
}

export default English
