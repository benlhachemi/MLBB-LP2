//imports
import Head      from 'next/head'
import Navbar    from '../components/navbar'

export default function TermsOfUse() {
	return (
		<div>
			<Head>
                <title>Terms of use</title>
				<meta name="description" content="The legal terms of use and conditions of using the 'Diamonds Legends' website." />
				<meta name="viewport"    content="width=device-width initial-scale=1.0 user-scalable=no"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className='w-full min-h-screen pb-10 bg-[url(/images/mobile-legends-diamonds-gratis.jpg)] bg-cover bg-center'>

				{/* N A V B A R */}
				<Navbar active={2}/>

				{/* L O G O */}
				<img src="https://i.imgur.com/cNNizpw.png" alt="Free Diamonds for all mobile legends gamers" className='cssanimation pushReleaseFrom [animation-delay:0.2s] mx-auto md:w-96 mb-10 sm:w-72 w-84'/>

				{/* M A I N */}
				<main className="px-5 cssanimation blurInTop [animation-delay:0.8s] w-5/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center py-5">
                    <h1 className='text-2xl md:text-5xl underline mb-4'>Terms of use</h1>
                    <p>
                    Welcome to Diamonds Legends!

                    These terms and conditions outline the rules and regulations for the use of Diamonds Legends&apos;s Website, located at www.diamonds-legends.com.

                    By accessing this website we assume you accept these terms and conditions. Do not continue to use Diamonds Legends if you do not agree to take all of the terms and conditions stated on this page.

                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of provision of the Company&apos;s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </p>
                    <h2 className='text-xl md:text-2xl underline mb-4 mt-3'>Cookies</h2>
                    <p>
                    We employ the use of cookies. By accessing Diamonds Legends, you agreed to use cookies in agreement with the Diamonds Legends&apos;s Privacy Policy.

                    Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>

                    <h2 className='text-xl md:text-2xl underline mb-4 mt-3'>License</h2>
                    <p>
                    Unless otherwise stated, Diamonds Legends and/or its licensors own the intellectual property rights for all material on Diamonds Legends. All intellectual property rights are reserved. You may access this from Diamonds Legends for your own personal use subjected to restrictions set in these terms and conditions.

                    You must not:

                    Republish material from Diamonds Legends
                    Sell, rent or sub-license material from Diamonds Legends
                    Reproduce, duplicate or copy material from Diamonds Legends
                    Redistribute content from Diamonds Legends
                    This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Template.

                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Diamonds Legends does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Diamonds Legends,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Diamonds Legends shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

                    Diamonds Legends reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.

                    You warrant and represent that:

                    You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                    The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                    The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
                    The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                    You hereby grant Diamonds Legends a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                    </p>
                </main>
			</main>
		</div>
	)
}
