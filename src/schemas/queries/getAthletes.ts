import {gql} from "@apollo/client";

export const GET_ATHLETES = gql`
    query GetAthletes {
        athletes {
            id
            firstname
            middleInitial
            lastname
            age
            country
            sport
            mainEvent
        }
    }
`;
