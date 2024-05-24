import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import LOGO from '../../assets/images/SVGIcon/iSHOP Logo.svg'
import DownArrow from '../../assets/images/SVGIcon/caret-down-solid.svg';
import LD_Mode from '../../assets/images/SVGIcon/dark-theme.svg';
import profileIcon from '../../assets/images/SVGIcon/profile_icon.svg'
import bagIcon from '../../assets/images/SVGIcon/bag_icon.svg'
import searchIcon from '../../assets/images/SVGIcon/search_icon.svg'
import HamBurger from '../../assets/images/homePageImg/hamburger_icon.svg'
import crossIcon from '../../assets/images/homePageImg/Cross_icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import { LDModeReducer } from '../../redux/slice/LDModeSlice';
import { toast } from 'react-toastify';


// Logo 
const logoEl = (
  <div className={styles.logo}>
    <Link to={'/'}>
      <img src={LOGO} alt="" />
    </Link>
  </div>
)
//Profile
const ProfileEl = (
  <div className={styles.profile}>
    <img src={profileIcon} alt="profile" />
    <p>Profile</p>
  </div>
)


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);


  //useSelector
  const { carts } = useSelector((state) => state.allCart);

  const [cartItem, setCartItem] = useState(carts.length);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItem(carts.length);
    totalPriceCalculate();
  }, [carts])

  const totalPriceCalculate = () => {
    let totalPrice = 0;
    carts.map((el) => {
      totalPrice = el.qty * el.price + totalPrice;
    })

    setTotalPrice(totalPrice);
  }
  //toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  //hide menu
  const hideMenu = () => {
    setShowMenu(false);
  }
  const activeLink = ({ isActive }) => (
    isActive ? `${styles.active}` : ''
  )
  //signIn
  const signIn = (
    <div className={styles.signIn}>
      <Link to="/login" onClick={hideMenu}>Login</Link>
    </div>
  )

  const mobileSearchBar = (
    <div className={styles.mobileSearchBar}>
      <img src={searchIcon} alt="" width={'20px'} />
      <input type="text" placeholder='Search Products...' />
    </div>
  )

  //handle down arrow
  const options = [
    'Abkhaz',
    'Aborian',
    'Afar',
    'Alas',
    'Alur',
    'Avar',
    'Bagri',
    'Banjar',
    'Batak Toba',
    'Bench',
    'Bukusu',
    'Catala',
    'Cree',
    'Dagaare',
    'Dari',
    'Dogri',
    'Duri',
    'Dzongkha (Bhutan)',
    'Ebira',
    'Edo',
    'English',
    'Ewe',
    'Fula',
    'Garo',
    'Hawu',
    'Ibab',
  ];

  const [languageEl, setLanguageEl] = React.useState(null);
  const languageOpen = Boolean(languageEl);
  const handleLanguageClick = (event) => {
    setLanguageEl(event.currentTarget);
  };
  const handleLanguageClose = () => {
    setLanguageEl(null);
  };
  //handle Light and Dark mode
  const [LDMode, setLDMode] = React.useState(null);
  const LDModeopen = Boolean(LDMode);
  const handleLDModeClick = (event) => {
    setLDMode(event.currentTarget);
  };
  const handleLDModeClose = () => {
    setLDMode(null);
  };
  //LDMode State
  const LDModeToggleState= useSelector((state)=>state.LDMode);
  const dispatch = useDispatch();

    //LDModeToggle Function
    const LDModeToggleFun = (e) => {
      dispatch(LDModeReducer(e));
      }
    console.log(LDModeToggleState.LDModeState);
  return (
    <>

      <header>
        <div className={styles.header}>
          <div className={styles['nav-mobiles']}>
            {logoEl}
            <div className={styles['menu-icon']}>
              <img src={HamBurger} alt="hamburger" onClick={toggleMenu} />
            </div>
          </div>
          <nav className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>
            <div>
            </div>
            <div className={styles['nav-top']}>
              <div className={styles.crossIcon}>
                <img src={crossIcon} alt="cross Icon" onClick={hideMenu} />
              </div>
              <div className={styles['nav-top-l-r']}>
                <div>
                  <p>EN</p>
                  <IconButton
                    id="languages"
                    aria-controls={languageOpen ? 'languages' : undefined}
                    aria-haspopup="true"
                    aria-expanded={languageOpen ? 'true' : undefined}
                    onClick={handleLanguageClick}
                    style={{ padding: '0' }}
                  >
                    <img src={DownArrow} alt="" />
                  </IconButton>
                  <Menu
                    id="languages"
                    aria-labelledby="languages"
                    anchorEl={languageEl}
                    open={languageOpen}
                    onClose={handleLanguageClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    PaperProps={{
                      style: {
                        maxHeight: '200px',
                        width: '20ch',
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'English'} onClick={handleLanguageClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
                <div>
                  <p>$</p>
                  <img src={DownArrow} alt="DownArrow" />
                </div>
                <div>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={LDModeopen ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={LDModeopen ? 'true' : undefined}
                    onClick={handleLDModeClick}
                  >
                    <img src={LD_Mode} alt="" />
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={LDMode}
                    open={LDModeopen}
                    onClose={handleLDModeClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <MenuItem onClick={()=>{handleLDModeClose(); LDModeToggleFun('Light');}} selected >Light Mode</MenuItem>
                    <MenuItem onClick={()=>{handleLDModeClose(); LDModeToggleFun('Dark');}}>Dark Mode</MenuItem>
                  </Menu>
                </div>
              </div>
              <div className={styles['nav-top-l-r']}>
                {signIn}
                <div>
                  <Link to={'/cart'}>
                    <img src={bagIcon} alt="bag" onClick={hideMenu} />
                  </Link>
                  <p>{cartItem} Items</p>
                  <span>${totalPrice}</span>
                </div>
                <div className={styles.searchIcon}>
                  <img src={searchIcon} alt="Search" />
                </div>
              </div>
            </div>
            {logoEl}
            {mobileSearchBar}
            <div className={styles['nav-links']}>

              <ul>
                <li><NavLink to="/" onClick={hideMenu} className={activeLink}>home</NavLink></li>
                <li><NavLink to="/store" onClick={hideMenu} className={activeLink}>store</NavLink></li>
                <li><NavLink to="/iphone" onClick={hideMenu} className={activeLink}>iphone</NavLink></li>
                <li><NavLink to="/ipad" onClick={hideMenu} className={activeLink}>ipad</NavLink></li>
                <li><NavLink to="/macbook" onClick={hideMenu} className={activeLink}>macbook</NavLink></li>
                <li><NavLink to="/accessories" onClick={hideMenu} className={activeLink}>accessories</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header