import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <img src="/home-line.svg" alt="home icon" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/image-line.svg" alt="image icon" />
            <span>Images</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/file-text-line.svg" alt="files icon" />
            <span>Files</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/gamepad-line.svg" alt="gamepad icon" />
            <span>Games</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/book-open-line.svg" alt="book open icon" />
            <span>Books</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/notification-2-line.svg" alt="notifications icon" />
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/settings-2-line.svg" alt="settings icon" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/user-line.svg" alt="user icon" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
