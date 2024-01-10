import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from './components/PasswordList'
import './App.css'

const color = [
  'ElectricBlue',
  'PaleBlue',
  'LightGray',
  'BlueGray',
  'Orange',
  'SeafoamGreen',
  'BurntOrange',
  'Teal',
  'Red',
  'Turquoise',
]

class App extends Component {
  state = {
    passwordCounter: 0,
    showPasswords: true,
    passList: [
      {
        id: 1,
        bgColor: 'Teal',
        siteName: 'youtube',
        username: 'safafgsdf',
        password: 'dfsSEFGseg',
      },
    ],
  }

  deletePassword = id => {
    const {passList} = this.state

    const filtered = passList.filter(each => each.id !== id)
    this.setState({
      passList: filtered,
    })
  }

  addPasswordBtn = event => {
    event.preventDefault()
    const username = document.getElementById('inputName').value
    const siteName = document.getElementById('websiteName').value
    const password = document.getElementById('inputPassword').value

    const {passList, passwordCounter} = this.state
    const randomColor = Math.floor(Math.random() * color.length)
    console.log(randomColor, color.length)
    const newpass = {
      id: uuidv4(),
      username,
      siteName,
      password,
      bgColor: color[randomColor],
    }
    this.setState({
      passList: [...passList, newpass],
      passwordCounter: passwordCounter + 1,
    })
  }

  togglePasswords = () => {
    const {showPasswords} = this.state
    console.log('box clicked')
    this.setState({
      showPasswords: !showPasswords,
    })
  }

  sortPasswords = event => {
    const {passList} = this.state
    const textInput = event.target.value
    const filtered = passList.filter(each =>
      each.siteName.toLowerCase().includes(textInput),
    )

    this.setState({
      passList: filtered,
    })
  }

  render() {
    const {passwordCounter, showPasswords, passList} = this.state

    return (
      <div className="app-container">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo-img"
          />
        </div>

        <div className="password-field-flexbox">
          <form className="password-fields" id="formEl">
            <h1 className="section-title">Add New Password</h1>
            <div className="user-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                className="input-el"
                placeholder="Enter Website"
                id="websiteName"
              />
            </div>
            <div className="user-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                className="input-el"
                placeholder="Enter Username"
                id="inputName"
              />
            </div>
            <div className="user-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                className="input-el"
                placeholder="Enter Password"
                id="inputPassword"
              />
            </div>
            <div className="add-btn-flexbox">
              <button
                type="submit"
                className="add-password-btn"
                onClick={this.addPasswordBtn}
              >
                Add
              </button>
            </div>
          </form>
          <div className="image-section">
            <img
              src={
                window.innerWidth >= 768
                  ? 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
              }
              alt="password manager"
              className="side-img"
            />
          </div>
        </div>

        <div className="password-list-section">
          <div className="counter-search-bar">
            <div className="counter">
              <h1 className="section-list-title">Your Passwords</h1>
              <p className="counter-num">{passwordCounter}</p>
            </div>
            <div className="search-flexbox">
              <div className="search-bar-flex">
                <img
                  className="search-logo"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  type="search"
                  className="search-el"
                  onChange={this.sortPasswords}
                />
              </div>
            </div>
          </div>
          <hr className="seperator" />
          <div className="show-password-flexbox">
            <input
              type="checkbox"
              id="showPass"
              onClick={this.togglePasswords}
            />
            <label htmlFor="showPass">Show Passwords</label>
          </div>

          <div className="password-list-section">
            <div
              className={
                passList.length === 0
                  ? 'no-pass-section'
                  : 'hide-no-pass-section'
              }
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p>No Passwords</p>
            </div>
            <div className="password-lists-container">
              <ul className="password-list-flexbox">
                {passList.map(each => (
                  <PasswordList
                    showPasswords={showPasswords}
                    passData={each}
                    key={each.id}
                    deletePassword={this.deletePassword}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
