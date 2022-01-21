/* eslint-disable arrow-body-style */
// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="main-container">
          {showLeftNavbar && (
            <ul className="left-cont">
              <h1 className="heading">Left Navbar Menu</h1>
              <li> Item 1</li>
              <li> Item 2</li>
              <li> Item 3</li>
              <li> Item 4</li>
            </ul>
          )}

          {showContent && (
            <div className="mid-cont">
              <h1 className="heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-cont">
              <h1 className="heading">Right Navbar</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
