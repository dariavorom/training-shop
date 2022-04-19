import React from 'react';

import {Banner} from "../../components/mainBlocks/banner/Banner";
import {Benefits} from "../../components/mainBlocks/benefits/Benefits";
import {WomenClothes} from '../../components/mainBlocks/womenClothes/WomenClothes';
import {MenClothes} from "../../components/mainBlocks/menClothes/menClothes";
import {Offers} from "../../components/mainBlocks/offers/Offers";
import {Subscribe} from "../../components/mainBlocks/subscribe/Subscribe";
import {LatestFromBlog} from "../../components/mainBlocks/latestFromBlog/LatestFromBlog";

import './main.scss';

export const Main = () => (
    <main>
        <Banner/>
        <Benefits/>
        <WomenClothes/>
        <MenClothes/>
        <Offers/>
        <Subscribe/>
        <LatestFromBlog/>
    </main>
);