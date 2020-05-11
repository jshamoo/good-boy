import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.primary};
      padding: 15px;
    `}
  >
    <Link
      to="/"
      css={css`
        color: white;
        text-decoration: none;
        font-family: Helvetica;
        font-size: 40px;
        &:hover {
          color: ${colors.secondary};
        }
      `}
    >
      Dog Alert
    </Link>
    <span
      css={css`
        font-size: 40px;
        padding-left: 5px;
      `}
    >
      🐶
    </span>
  </header>
);

export default NavBar;
