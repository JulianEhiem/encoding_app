import React from 'react';
// import * as fsrsJs from 'fsrs.js'
import {FSRS, Card, Rating, State} from 'fsrs.js'
import {LeetCard} from "./LeetCard";
import {mockCards} from "../helpers/mockData";

export type LeetCardDetails = {
    number: number;
    title: string;
    description: string;
    level: string;
    tags: string[];
}

export class ProblemCard extends Card implements LeetCardDetails{
    number: number;
    title: string;
    description: string;
    level: string;
    tags: string[];
    constructor(details: LeetCardDetails) {
        super();
        this.number = details.number || 0;
        this.title = details.title || '';
        this.description = details.description || '';
        this.level = details.level || 'easy';
        this.tags = details.tags || [];
    }

}

export const LeetCards = () => {

    // const cardDetails: LeetCardDetails = {
    //     number: 174,
    //     title: 'Binary Search',
    //     description: 'Perform a binary search operation to get this job!',
    //     level: 'hard',
    //     tags: ['binary-search', 'array']
    // }

    const mockCardsList = mockCards;

    // const randomNumbers = [1,34,56453,4233,3,0,0.34,5384.34667, 7]
    const cardDetails = mockCardsList[Math.floor(Math.random() * mockCardsList.length)];
    console.log('random:', cardDetails)

    const fsrs = new FSRS();
    const card = new ProblemCard(cardDetails);
    const rating= Rating;
    const state = State;

    const {number, title, description, level, tags} = cardDetails

    console.log(card)
    // console.log(rating)
    // console.log(state)

    const now = new Date(2022, 10, 29, 12, 30, 0, 0);
    const scheduling_cards = fsrs.repeat(card, now);



    return(
        <>
            <h3>Hello from Leetcards!</h3>
            <LeetCard number={number} title={title}  description={description} level={level} tags={tags}/>
        </>
    )
}