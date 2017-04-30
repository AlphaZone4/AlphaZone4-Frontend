import React from 'react';

import { connect } from 'react-redux'

import DatabaseHome from "../components/DatabaseHome";

const DatabaseView = ({projects, match}) => {
    return (
        <DatabaseHome
            match={match}
            projects={projects}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
      projects: state.projects.isFetching ? [] : state.projects.projects
  }
}

export default connect(
    mapStateToProps,
)(DatabaseView)