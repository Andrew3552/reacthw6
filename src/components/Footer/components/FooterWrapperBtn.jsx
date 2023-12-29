import React from 'react'
import Button from "../../Button/Button"
import Fbicon from "./icons/fbicon.svg?react"
import InstIcon from "./icons/instIcon.svg?react"
import TwitterIcon from "./icons/twitterIcon.svg?react"
import InIcon from "./icons/inIcon.svg?react"

const FooterWrapperBtn = () => {
    
    return (
        <div className="footer__wrapper-btn">
            <Button><Fbicon /></Button>
            <Button><InstIcon /></Button>
            <Button><TwitterIcon /></Button>
            <Button><InIcon /></Button>
            
        </div>
    )
}

export default FooterWrapperBtn