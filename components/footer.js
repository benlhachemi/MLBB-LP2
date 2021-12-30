import HomeIcon from '@mui/icons-material/Home'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SportsIcon from '@mui/icons-material/Sports'
import ForumIcon from '@mui/icons-material/Forum'

const Footer = () => {
    return (
        <div className='lg:hidden fixed w-full h-14 shadow-2xl text-[#7075a1] text-[9px] bg-[#252946] z-50 bottom-0 gap-3 text-center items-center grid grid-cols-5'>
            <div className='justify-center items-center inline-grid text-center bg-[url(https://m.mobilelegends.com/static/images/v/barbac.png)] h-full bg-cover bg-no-repeat'>
                <center><HomeIcon /></center>
                HOME
            </div>

            <div onClick={e => window.location.href='https://m.mobilelegends.com/id/video/'} className='inline-grid justify-center items-center text-center'>
                <center><SlowMotionVideoIcon /></center>
                VIDEO
            </div>

            <div onClick={e => window.location.href='https://m.mobilelegends.com/id/guide'} className='inline-grid justify-center items-center text-center'>
                <center><EmojiEventsIcon /></center>
                GUIDES
            </div>

            <div onClick={e => window.location.href='https://moba.mobilelegends.com/#/id/esport'} className='inline-grid justify-center items-center text-center'>
                <center><SportsIcon /></center>
                E-SPORTS
            </div>

            <div onClick={e => window.location.href='https://m.facebook.com/mobilelegendsgame/'} className='inline-grid justify-center items-center text-center'>
                <center><ForumIcon /></center>
                SOCIAL MEDIA
            </div>

        </div>
    )
}

export default Footer