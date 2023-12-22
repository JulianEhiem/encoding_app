import {gql} from "@apollo/client";

export const GET_ATHLETES = gql`
    query GetAthletes {
        athletes {
            name
            sex
            specialty
        }
    }
`;
