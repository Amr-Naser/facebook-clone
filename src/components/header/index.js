import React , { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useClickOutSide from "../../helpers/clickOutside";
import {
  ArrowDown,
  Gaming,
  HomeActive,
  Home,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
  FriendsActive,
  Friends,
} from "../../svg";
import AllMenu from "./AllMenu";
import SearchMenu from "./SearchMenu";
import "./style.css";
import UserMenu from "./userMenu";

const Header = ({ page, getAllPosts }) => {
  const color = "#65676b";
  const user = useSelector((state) => state.user);
  const allMenu = useRef(null);
  const userMenu = useRef(null);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [showUserMenu, setSowUserMenu] = useState(false);
  useClickOutSide(allMenu, () => {
    setShowAllMenu(false);
  });
  useClickOutSide(userMenu, () => {
    setSowUserMenu(false);
  });

  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1" onClick={() => setShowSearchMenu(true)}>
          <Search color={color} />
          <input
            type="text"
            placeholder="search facebook"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu
          color={color}
          setShowSearchMenu={setShowSearchMenu}
          token={user.token}
        />
      )}
      <div className="header_middle">
        <Link
          to="/"
          className={`middle_icon ${page === "home" ? "active" : ""}`}
          color={color}
          onClick={() => getAllPosts()}
        >
          {page === "home" ? <HomeActive /> : <Home color={color} />}
        </Link>
        <Link
          to="/friends"
          className={`middle_icon ${page === "friends" ? "active" : "hover1"}`}
        >
          {page === "friends" ? <FriendsActive /> : <Friends color={color} />}
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Watch color={color} />
          <div className="middle_notification">+9</div>
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Market color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Gaming color={color} />
        </Link>
      </div>
      <div className="header_right">
        <Link
          to="/profile"
          className={`profile_link hover1 ${
            page === "profile" ? "active_link" : ""
          }`}
        >
          <img src={user?.picture} alt="profile" />
          <span>{user?.first_name}</span>
        </Link>
        <div
          className={`circle_icon ${showAllMenu && `active_header`}`}
          ref={allMenu}
        >
          <div
            onClick={() => {
              setShowAllMenu((prev) => !prev);
            }}
          >
            <div style={{ transform: "translateY(2px)" }}>
              <Menu />
            </div>
          </div>
          {showAllMenu && <AllMenu />}
        </div>
        <div className="circle_icon">
          <Messenger />
        </div>
        <div className="circle_icon">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
        <div
          className={`circle_icon ${showUserMenu && `active_header`}`}
          ref={userMenu}
        >
          <div
            onClick={() => {
              setSowUserMenu((prev) => !prev);
            }}
          >
            <div style={{ transform: "translateY(2px)" }}>
              <ArrowDown />
            </div>
          </div>
          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
