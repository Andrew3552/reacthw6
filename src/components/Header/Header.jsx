import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

import Container from "../Helper/Container"
import Body from "../Helper/Body"
import NavMenu from "./components/NavMenu"
import HeaderBtn from "./components/HeaderBtn"
import "./Header.scss"

const Header = () => {

    return (
        <div className="header">
            <Container>
                <Body headerBody>
                    <Link to="/">
                        <img src="../../../src/assets/img/logo.png" alt="" />
                    </Link>
                    <NavMenu />
                    <HeaderBtn/>
                </Body>
            </Container>
        </div>
    )
}

Header.propTypes = {
    favorite: PropTypes.array,
    addToCart: PropTypes.array
}

export default Header