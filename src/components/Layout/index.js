/* eslint-disable arrow-body-style */
// Write your code here
import './index.css'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className="bg-container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Layout
