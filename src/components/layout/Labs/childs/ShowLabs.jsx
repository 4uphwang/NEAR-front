import React from "react";
import LabsTree from '../../../../assets/LabsTree.png';
import Grid1 from '../../../../assets/Grid1.png';
import Grid2 from '../../../../assets/Grid2.png';
import Grid3 from '../../../../assets/Grid3.png';
import MushroomAdult from '../../../../assets/MushroomAdult.png';

const ShowLabs = () => {

    const ItemElements = () => {
        return (
            <div className="LabsItemBox">
                <div className="LabsItemImage"></div>
                <div className="LabsItemAmount">0</div>
            </div>
        )
    }

    const DummyElements = () => {
        return (
            <div className="LabsDummyItemBox"></div>
        )
    }

    const ShowSpores = () => {
        return (
            <div className="ShowSporesBox">
                <div className="ItemHorizontalBox">
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                </div>
                <div className="ShowItemTitle">Spores</div>
            </div>
        )
    }

    const ShowMushrooms = () => {
        return (
            <div className="ShowMushroomsBox">
                <div className="ShowItemTitle">Mushrooms</div>
                <div className="ItemHorizontalBox">
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                </div>
            </div>
        )
    }

    const ShowSpSpores = () => {
        return (
            <div className="ShowSpSporesBox">
                <div className="ShowItemTitle">SPECIAL SPORES</div>
                <div className="ItemVerticalBox">
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {DummyElements()}
                </div>
            </div>
        )
    }

    const ShowSpMushrooms = () => {
        return (
            <div className="ShowSpMushroomsBox">
                <div className="ShowItemTitle">SPECIAL MUSHROOMS</div>
                <div className="ItemVerticalBox">
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {ItemElements()}
                    {DummyElements()}
                </div>
            </div>
        )
    }

    const MushroomElement = (val) => {
        switch (val) {
            case 1:
                return (<img src={MushroomAdult} className="GrowingOne" />);
            case 2:
                return (<img src={MushroomAdult} className="GrowingTwo" />);
            case 3:
                return (<img src={MushroomAdult} className="GrowingThree" />);
            case 4:
                return (<img src={MushroomAdult} className="GrowingFour" />);
        }
    }


    const GrowingStatus = () => {
        return (
            <div className="GrowingStatus">
                {MushroomElement(1)}
                {MushroomElement(2)}
                {MushroomElement(3)}
                {MushroomElement(4)}
            </div>
        )
    }

    return (
        <>
            <div className="LabsBox">
                {ShowSpores()}
                {ShowMushrooms()}
                {ShowSpSpores()}
                {ShowSpMushrooms()}
                <div className="LabsTree">
                    {GrowingStatus()}
                </div>
            </div>
        </>

    )
}

export default ShowLabs;