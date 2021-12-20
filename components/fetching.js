import CircularProgress from '@mui/material/CircularProgress'
import Box              from '@mui/material/Box'

const Fetching = ({msg}) => {
    return (
        <div className="justify-center text-center align-middle items-center">
            <div className='py-5 mx-auto justify-center text-center align-middle items-center'>
                <Box sx={{ display: 'flex' }} style={{justifyContent: 'center'}}>
                    <CircularProgress />
                </Box>
            </div>
            <div className="text-blue-300 font-bold text-xl">{msg}</div>
        </div>
    )
}

export default Fetching
