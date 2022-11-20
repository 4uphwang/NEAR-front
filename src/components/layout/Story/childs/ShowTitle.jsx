import React from "react";
import L_Bg_Mush from '../../../../assets/L_BackgroundMushrooms.png';
import L_Bg_Thief from '../../../../assets/L_BackgroundThief.png';
import R_Bg_Mush from '../../../../assets/R_BackgroundMushrooms.png';
import R_Bg_Thief from '../../../../assets/R_BackgroundThief.png';

const ShowTitle = ({ handleFlow }) => {
    return (
        <>
            <div className="GameTitleBox">
                <div className="GameTitle">MUSHROOM WAR</div>
                <div className="GameSubTitle">Produce or Steal!</div>
                <div className="GameTitleGIF">Image</div>
                <div>
                    <button onClick={() => handleFlow(2)} className="GameStartBtn">GAME START</button>
                </div>
            </div>
            <div className="L_BG">
                <img src={L_Bg_Mush} />
                <img src={L_Bg_Thief} className="L_BG_Thief" />
            </div>
            <div className="R_BG">
                <img src={R_Bg_Mush} />
                <img src={R_Bg_Thief} className="R_BG_Thief" />
            </div>
        </>
    )
}

export default ShowTitle;