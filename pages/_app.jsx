import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-neutral-900 w-screen h-screen'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
