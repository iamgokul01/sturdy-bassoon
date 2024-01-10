import './index.css'

const PasswordList = props => {
  const {passData, deletePassword, showPasswords} = props
  const {bgColor, password, siteName, username, id} = passData

  const onClickDeletePass = () => {
    deletePassword(id)
  }

  return (
    <li className="password-list-flexbox-inner">
      <div className="profile-user-data">
        <div className="profile">
          <p className={`dp ${bgColor}`}>{siteName[0].toUpperCase()}</p>
        </div>
        <div className="data-section">
          <p>{siteName}</p>
          <p>{username}</p>
          {showPasswords === false ? (
            <p>{password}</p>
          ) : (
            <img
              className="hide-img"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
        <div className="delete-btn-flexbox">
          <button
            type="button"
            className="delete-btn"
            onClick={onClickDeletePass}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordList
