//imports
import Head      from 'next/head'
import Navbar    from '../components/navbar'

export default function ContactUs() {
	return (
		<div>
			<Head>
				<title>Contact us</title>
				<meta name="description" content="Contact the 'Diamonds Legends' Team on : contact@diamondslegends.com " />
				<meta name="viewport"    content="width=device-width initial-scale=1.0 user-scalable=no"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className='w-full min-h-screen pb-10 bg-[url(/images/mobile-legends-diamonds-gratis.jpg)] bg-cover bg-center'>

				{/* N A V B A R */}
				<Navbar active={3}/>

				{/* L O G O */}
				<img src="https://i.imgur.com/cNNizpw.png" alt="Free Diamonds for all mobile legends gamers" className='cssanimation pushReleaseFrom [animation-delay:0.2s] mx-auto md:w-96 mb-10 sm:w-72 w-84'/>

				{/* M A I N */}
				<main className="px-5 cssanimation blurInTop [animation-delay:0.8s] w-5/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center py-5">
                    <h1 className='text-2xl md:text-5xl underline mb-4'>Contact us</h1>
                    <p>
                    You can contact us at : contact@diamondslegends.com
                    </p>
                    
                </main>
			</main>
		</div>
	)
}
