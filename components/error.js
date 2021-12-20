
const Error = ({msg}) => {
    return (
        <div className="justify-center text-center align-middle items-center">
            <center>
                <img src="/images/error-icon.png" className="cssanimation pushReleaseFrom my-5 w-24 justify-center align-middle items-center" alt="" />
                <div className="text-red-300 font-bold text-xl">{msg}</div>
            </center>
        </div>
    )
}

export default Error
