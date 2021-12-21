//imports
import Head      from 'next/head'
import Navbar    from '../components/navbar'

export default function Disclaimer() {
	return (
		<div>
			<Head>
				<title>Disclaimer</title>
				<meta name="description" content="The disclaimer of the official 'Diamonds Legends' website" />
				<meta name="viewport"    content="width=device-width initial-scale=1.0 user-scalable=no"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className='w-full min-h-screen pb-10 bg-[url(/images/mobile-legends-diamonds-gratis.jpg)] bg-cover bg-center'>

				{/* N A V B A R */}
				<Navbar active={5}/>

				{/* L O G O */}
				<img src="https://i.imgur.com/cNNizpw.png" alt="Free Diamonds for all mobile legends gamers" className='cssanimation pushReleaseFrom [animation-delay:0.2s] mx-auto md:w-96 mb-10 sm:w-72 w-84'/>

				{/* M A I N */}
				<main className="px-5 cssanimation blurInTop [animation-delay:0.8s] w-5/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center py-5">
                    <h1 className='text-2xl md:text-5xl underline mb-4'>Disclaimer</h1>
                    <p>
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

					limit or exclude our or your liability for death or personal injury;
					limit or exclude our or your liability for fraud or fraudulent misrepresentation;
					limit any of our or your liabilities in any way that is not permitted under applicable law; or
					exclude any of our or your liabilities that may not be excluded under applicable law.
					The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.

					As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                    </p>
                    
                </main>
			</main>
		</div>
	)
}
