import React from 'react'
import {MenuItems} from "../Navbar/Navbar";

type Props = {
    item: MenuItems
}


const MainContent: React.FC<Props> = ({item}) => {
    return (
        <div className="main-content">
            <h1 className={'h1'} title={item.name}>{item.name}</h1>
            <div className="text-center">
                <img className={'main-icon'} src={item.image} />
            </div>
        </div>
    )
}

export default MainContent
