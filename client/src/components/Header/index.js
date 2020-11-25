import React, { useState, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SwipeableDrawer, IconButton, Menu, Button, Fade, MenuItem } from '@material-ui/core';
import { FaBars } from 'react-icons/fa';

import AuthContext from '../../contexts/AuthContext';

import logo from '../../assets/images/adopte.me.svg';

import './styles.css';

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { state } = useContext(AuthContext);

  function toggleOpenDrawer() {
    setOpenDrawer(!openDrawer);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <header>
      <nav className="menu">
        <div>
          <Link to="/">
            <img src={logo} alt="adopte.me" />
          </Link>
        </div>
        <div className="menu-items">
          <div>
            <ul className="menu-list-items">
              <li className="doe-button">
                <Link to="">
                  {' '}
                  <FaHeart /> <span>doe</span>
                </Link>
              </li>
              <li>
                <Link to="/">animais para adoção</Link>
              </li>
              {!state.ong && (
                <li>
                  <Link to="/login">login</Link>
                </li>
              )}
              {state.ong && (
                <li>
                  <button id="perfil-button" onClick={handleClick}>
                    olá, {state.ong.name.toLowerCase()}
                  </button>
                  <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/">ver perfil</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/">cadastrar pet</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/">sair</Link>
                    </MenuItem>
                  </Menu>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="responsive-menu">
        <div>
          <Link to="/">
            <img src={logo} alt="adopte.me" />
          </Link>
        </div>
        <IconButton
          style={{ borderRadius: 0, marginRight: '2rem' }}
          className="menu-responsive-button"
          onClick={toggleOpenDrawer}
        >
          <FaBars size={20} color="white" />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={openDrawer}
          onClose={toggleOpenDrawer}
          onOpen={toggleOpenDrawer}
        >
          <ul className="menu-list-items">
            <li className="doe-button">
              <Link to="">
                {' '}
                <FaHeart /> <span>doe</span>
              </Link>
            </li>
            {state.ong && <li style={{ color: 'white' }}>olá, {state.ong.name.toLowerCase()}</li>}
            <li>
              <Link to="/">animais para adoção</Link>
            </li>
            {!state.ong && (
              <li>
                <Link to="/login">login</Link>
              </li>
            )}
            {state.ong && (
              <li>
                <Link to="/">cadastrar pet</Link>
              </li>
            )}
            {state.ong && (
              <li>
                <Link to="/">ver perfil</Link>
              </li>
            )}
          </ul>
        </SwipeableDrawer>
      </nav>
    </header>
  );
}

export default Header;
