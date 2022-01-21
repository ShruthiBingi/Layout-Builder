/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
// Write your code here
/* eslint-disable arrow-body-style */
import './index.css'
// import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = event => {
        onToggleShowContent()
      }

      const changeLeftNav = event => {
        onToggleShowLeftNavbar()
      }

      const changeRightNav = event => {
        onToggleShowRightNavbar()
      }
      console.log(showContent)

      return (
        <div className="top-container">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="showContent"
              onChange={changeContent}
              value="Content"
              checked={showContent}
            />
            <label htmlFor="showContent"> Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="showLeftNavbar"
              onChange={changeLeftNav}
              value="LeftNavbar"
              checked={showLeftNavbar}
            />
            <label htmlFor="showLeftNavbar"> Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="showRightNavbar"
              onChange={changeRightNav}
              value="RightNavbar"
              checked={showRightNavbar}
            />
            <label htmlFor="showRightNavbar"> Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
