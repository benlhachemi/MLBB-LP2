//imports
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'

const Success = ({msg,question,yes,no,setSuccess, setStep_1, setStep_2}) => {
    return (
        <div className="justify-center text-center align-middle items-center">
            <center>
                <img src="/images/success-icon.png" className="cssanimation pushReleaseFrom my-5 w-24 justify-center align-middle items-center" alt="" />
                <div className="text-green-300 font-bold text-xl">{msg}</div>

                <div className="mt-4 w-full pb-4 bg-white text-center bg-opacity-40 rounded-md shadow-lg justify-center text-white">
                    <h1 className="py-2 text-xl font-bold">{question}</h1>
                    <div className="flex py-3 px-10 flex-1 text-center justify-center align-middle">
                        <div onClick={e => {setSuccess(false);setStep_1(false);setStep_2(true)}} className="cursor-pointer border-2 mx-2 py-2 px-5 rounded-lg bg-green-600">
                            <CheckIcon />
                            <div>{yes}</div>
                        </div>
                        <div onClick={e => setSuccess(false)} className="cursor-pointer border-2 mx-2 py-2 px-5 rounded-lg bg-red-600">
                            <ClearIcon />
                            <div>{no}</div>
                        </div>
                    </div>
                </div>

            </center>
        </div>
    )
}

export default Success
