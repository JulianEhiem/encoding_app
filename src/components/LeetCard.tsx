import React from 'react';
import { LeetCardDetails} from "./LeetCards";

export const LeetCard = ({ number, description, tags, title, level }: LeetCardDetails) => {
    const getBackground = (level: string) => {
        let color;
        switch(level) {
            case 'easy':
                color = 'bg-green-300'
                break;
            case 'medium':
                color = 'bg-orange-400'
                break;
            case 'hard':
                color = 'bg-red-400'
                break;
        }
        return color;
    }
    return(
        <div className={`${getBackground(level)} rounded-lg`}>
            <h4 className= "text-base">{number} - {title}</h4>
            <br/>
            <p className= "text-base">{description}</p>
            <br/>
            <p className= "text-base">{tags[0]}</p>
        </div>
    )
}