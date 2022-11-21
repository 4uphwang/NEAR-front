import React from "react";
import Mushroom from '../../../../assets/MushroomAdult.png';

const ItemList = ({ type, Rank }) => {
    return (
        <div className="Items">
            <img src={Mushroom} className="ItemImg" />
            <div className="Box">
                <div className="Description">
                    <div className="ItemName">Type: {type}</div>
                    <div className="ItemDescription">Rank: {Rank}</div>
                </div>
            </div>
        </div>)
};

export default ItemList;