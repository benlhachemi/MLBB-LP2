//imports
import CircularProgress from '@mui/material/CircularProgress'
import Box              from '@mui/material/Box'

const Loading = () => {
    return (
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default Loading
