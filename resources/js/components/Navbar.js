import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DraftsIcon from '@material-ui/icons/Drafts';
import ErrorIcon from '@material-ui/icons/Error';

function Navbar() {
    return (
        <div className='navbar' >
            <img src="https://yt3.ggpht.com/ytc/AAUvwnjV7CoGI4UYmS_FEvyVgWOeSMViZ9ExnUnMjB7C=s900-c-k-c0x00ffffff-no-rj" alt=""/>
            <div className="home">
            <HomeIcon/>
            </div>
            <SportsSoccerIcon/>
            <AttachMoneyIcon/>
            <DraftsIcon/>
            <ErrorIcon/>
        </div>
    )
}

export default Navbar
