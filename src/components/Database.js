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
        const { match } = this.props

        return (
            <div className="Database">
                {/* Project-wide page */}
                <h2>Browsing {`${match.params.project}`}</h2>

                {/* TODO - pull from project data in store */}
                <Link className='btn btn-default' to={`${match.url}/browse/eu`}>Europe</Link>
                <Link className='btn btn-default' to={`${match.url}/browse/na`}>America</Link>
                <Link className='btn btn-default' to={`${match.url}/browse/hk`}>Asia</Link>
                <Link className='btn btn-default' to={`${match.url}/browse/jp`}>Japan</Link>

                <Route path={`${match.url}/browse/:slug*`} render={(props) => <DatabaseCategory {...props} project={match.params.project} browseRoot={`${match.url}/browse`} />} />
            </div>
        )
    }
}

export default Database