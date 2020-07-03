import React from 'react'

import './Header.scss'

const Header: React.FC = () => {
  return (
    <header>
      <div className="navbar-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Who's Talking
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Main <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/newMeeting">
                  New Meeting
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  My Meetings
                </a>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Quickstart My Meetings
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <div
                style={{
                  marginRight: '10px',
                  marginLeft: '15px',
                  marginTop: '5px',
                  marginBottom: '5px'
                }}
                className="container-fluid"
              >
                <h5>
                  <a href="/support-donate/">
                    <svg
                      className="bi bi-heart-fill"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        clip-rule="evenodd"
                      />
                    </svg>{' '}
                    Support
                  </a>

                  <a
                    role="presentation"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    href="/"
                  >
                    <svg
                      className="bi bi-box-arrow-in-right"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.146 11.354a.5.5 0 010-.708L10.793 8 8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 011 8z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 14.5A1.5 1.5 0 0015 13V3a1.5 1.5 0 00-1.5-1.5h-8A1.5 1.5 0 004 3v1.5a.5.5 0 001 0V3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8A.5.5 0 015 13v-1.5a.5.5 0 00-1 0V13a1.5 1.5 0 001.5 1.5h8z"
                        clip-rule="evenodd"
                      />
                    </svg>{' '}
                    Login{' '}
                  </a>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalLabel">
                            Login
                          </h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="container-fluid">
                            <form
                              action=""
                              className="form-inline"
                              method="post"
                            >
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value=""
                              />
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value=""
                              />
                              <input
                                className="btn btn-primary"
                                type="submit"
                                value="Login"
                              />
                            </form>

                            <div className="container">
                              <br />
                              <p>
                                No account?{' '}
                                <a
                                  role="presentation"
                                  className="active"
                                  data-toggle="modal"
                                  data-target="#register"
                                  href="/"
                                >
                                  Register here
                                </a>
                                .
                              </p>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    role="presentation"
                    className="active"
                    data-toggle="modal"
                    data-target="#register"
                    href="/"
                  >
                    <svg
                      className="bi bi-pencil-square"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
                        clip-rule="evenodd"
                      />
                    </svg>{' '}
                    Sign up
                  </a>
                </h5>
                <div
                  className="modal fade"
                  id="register"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">
                          Register
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="container">
                          <form method="post" action="/register">
                            <dl>
                              <dt>
                                <label htmlFor="username">Username</label>
                              </dt>
                              <dd>
                                <input
                                  id="username"
                                  name="username"
                                  type="text"
                                  value=""
                                />
                              </dd>

                              <dt>
                                <label htmlFor="email">Email Address</label>
                              </dt>
                              <dd>
                                <input
                                  id="email"
                                  name="email"
                                  type="text"
                                  value=""
                                />
                              </dd>

                              <dt>
                                <label htmlFor="password">New Password</label>
                              </dt>
                              <dd>
                                <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  value=""
                                />
                              </dd>

                              <dt>
                                <label htmlFor="confirm">Repeat Password</label>
                              </dt>
                              <dd>
                                <input
                                  id="confirm"
                                  name="confirm"
                                  type="password"
                                  value=""
                                />
                              </dd>

                              <dt>
                                <input
                                  id="accept_tos"
                                  name="accept_tos"
                                  type="checkbox"
                                  value="y"
                                />
                                <label htmlFor="accept_tos">
                                  I accept the{' '}
                                  <a href="/about/tos" target="blank">
                                    Terms of Service
                                  </a>{' '}
                                  and{' '}
                                  <a
                                    href="/about/privacy-policy"
                                    target="blank"
                                  >
                                    Privacy Notice
                                  </a>{' '}
                                  (updated Jan 22, 2015)
                                </label>
                              </dt>
                            </dl>
                            <p>
                              <input type="submit" value="Register" />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
