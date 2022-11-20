import React from "react";
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';

const ShowCrawl = ({ handleFlow }) => {
    return (
        <div className="Story" onClick={() => handleFlow(1)}>
            <Crawl
                title="Episode I"
                subTitle="A Mushroom"
                text="The Earth was destroyed but the mushroom race survived. The mushrooms travel through space in search of a planet to settle on. They finally found a planet and decided to make their own abode. However, there is a PARI (pseudonym/miner) who used to live on that planet, and they find out that their stock is similar to mushrooms. Mushrooms have the characteristic of constantly reproducing themselves to protect their species. With this characteristic, we want to protect it from PARI by making various genetic mushrooms. According to an old legend, a queen is born every century, and when the queen is born, the mushroom gains cognitive abilities. The mushroom race begins a journey of endless breeding so that more races can have cognitive abilities and protect themselves..."
            />
        </div>
    )
}

export default ShowCrawl;