import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <MenuBar>
      <Link href="/">
        <img src="/bold.png" alt="bold logo" width={120} height={120} style={{marginTop:"0.5em"}} />
      </Link>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          <li>
            <Link
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                toggleMenuOpen(!menuOpen);
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                toggleMenuOpen(!menuOpen);
              }}
              href="/challenge"
            >
              Challenge
            </Link>
          </li>
          <li>
            <Link
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                toggleMenuOpen(!menuOpen);
              }}
              href="/solution"
            >
              Solution
            </Link>
          </li>
          <li>
            <Link
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                toggleMenuOpen(!menuOpen);
              }}
              href="/strategies"
            >
              Strategies
            </Link>
          </li>
          <li>
            <Link
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                toggleMenuOpen(!menuOpen);
              }}
              href="/team"
            >
              Team
            </Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  );
};

export default MobileNavMenu;

const MenuBar = styled.header`
  @media ${breakpoints.md} {
    display: none;
  }
  top: 0;
  height: 10rem;
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: "blue";
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 20%; */
`;

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3rem;
  outline: none;
  border: none;
  z-index: 11;
  margin-bottom:1rem;
  div {
    width: 2.8rem;
    height: 0.5rem;
    background: ${({ menuOpen }) => (menuOpen ? "#000000" : "#0d2484")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #5565a8;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};

  ul {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 40px;
    li {
      cursor:pointer;
      list-style: none;
      margin-top: 1em;
      margin-bottom: 1em;
      a {
        text-decoration: none;
        color: white;
        :hover {
          color: "#34453a";
        }
      }
    }
  }
`;
