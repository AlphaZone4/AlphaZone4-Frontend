import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import ProjectView from "../containers/ProjectView"

const DatabaseHome = ({ projects, match }) => {
    return( <div>
        <h1>Virtual World Databases</h1>
        {projects.map(project =>
            <Link key={project.id} to={`${match.url}/${project.id}`}>
                <Button>{project.name}</Button>
            </Link>
        )}
        <Route path={`${match.url}/:project([a-zA-Z-_]+)`} component={ProjectView} />
    </div>
    )
}

DatabaseHome.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default DatabaseHome;