//imports
import Head      from 'next/head'
import Navbar    from '../components/navbar'

export default function PrivacyPolicy() {
	return (
		<div>
			<Head>
				<title>Privacy policy</title>
				<meta name="description" content="The legal privacy policy of 'Diamonds Legends' website." />
				<meta name="viewport"    content="width=device-width initial-scale=1.0 user-scalable=no"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className='w-full min-h-screen pb-10 bg-[url(/images/mobile-legends-diamonds-gratis.jpg)] bg-cover bg-center'>

				{/* N A V B A R */}
				<Navbar active={4}/>

				{/* L O G O */}
				<img src="/images/mobile-legends-diamonds-legends-logo.png" alt="Free Diamonds for all mobile legends gamers" className='cssanimation pushReleaseFrom [animation-delay:0.2s] mx-auto md:w-96 mb-10 sm:w-72 w-84'/>

				{/* M A I N */}
				<main className="px-5 cssanimation blurInTop [animation-delay:0.8s] w-5/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center py-5">
                    <h1 className='text-2xl md:text-5xl underline mb-4'>Privacy policy</h1>
                    <p>
                    Please read Privacy Policy
                    </p>
                    <h2 className='text-xl md:text-2xl underline mb-4 mt-3'>Reservation of Rights</h2>
                    <p>
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                    </p>

                    <h2 className='text-xl md:text-2xl underline mb-4 mt-3'>Removal of links from our website</h2>
                    <p>
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.

                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                    </p>
                </main>
			</main>
		</div>
	)
}
