import React from 'react';

import { connect } from 'react-redux'

import Database from "../components/Database";

const ProjectView = ({project, match}) => {
    return (
        <Database
            match={match}
            project={project}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    // find the project we want
    var projectID = ownProps.match.params.project;

    var found = false;
    var project = null;
    if (!state.projects.isFetching)
    {
        for(var i=0; i<state.projects.projects.length; i++)
        {
            project = state.projects.projects[i];
            if (project.id === projectID) {
                found = true;
                break;
            }
        }
    }

    return {
        project: !found ? null : project
    }
}

export default connect(
    mapStateToProps,
)(ProjectView)