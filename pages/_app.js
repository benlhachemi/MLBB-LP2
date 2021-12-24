import '../styles/globals.css'
import useAnalytics from '../hooks/useAnalytics'

function MyApp({ Component, pageProps }) {
  const [visitor, timeSpent, actions] = useAnalytics('MLBB') 
  return <Component {...pageProps} actions={actions}/>
}

export default MyApp
