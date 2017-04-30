import React from 'react';

// TODO - move this to backend
var projects = [
    {
        id: "pshome",
        name: "PlayStation Home (archive)"
    }
];

import DatabaseHome from "../components/DatabaseHome";

const DatabaseView = ({match}) => {
    return (
        <DatabaseHome
            match={match}
            projects={projects}
        />
    )
}

export default DatabaseView