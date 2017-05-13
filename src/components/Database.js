import React, { Component } from "react"
import { Route, Link } from "react-router-dom"

import DatabaseCategory from "./DatabaseCategory"

class Database extends Component {
    componentDidMount() {
        //const { dispatch, selectedSubreddit } = this.props
        //dispatch(fetchPostsIfNeeded(selectedSubreddit))
        //console.log(`Heya! I'm here and I'm ${this.props.match.params.project}`);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.project !== prevProps.match.params.project)
        {
            //console.log(`Changed project from ${prevProps.match.params.project} to ${this.props.match.params.project}`);
            // TODO: fetch new things... :)
            //dispatch(fetchProjectData(project))
        }
    }

    render() {
        const { project, match } = this.props

        return (
            <div>
                { project ? (
                    <div className="Database">
                        {/* Project-wide page */}
                        <h2>Browsing {`${project.name}`}</h2>

                        {/* pull from project data in store */}
                        {project.links.map((link, idx) => 
                            <Link key={`${match.url}_link_${idx}`} className='btn btn-default' to={`${match.url}/browse/${link.link}`}>{link.name}</Link>
                        )}

                        <Route path={`${match.url}/browse/:slug*`} render={(props) => <DatabaseCategory {...props} project={match.params.project} browseRoot={`${match.url}/browse`} />} />
                    </div>
                ) : (
                    <div>
                        {/* TODO - push to 404 page */}
                        No such project ID "<b>{match.params.project}</b>"
                    </div>
                ) }
            </div>
        )
    }
}

export default Database