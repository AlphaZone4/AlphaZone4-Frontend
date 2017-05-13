import React, { Component } from "react"

import { connect } from 'react-redux'

import Tile from "./Tile"
import Breadcrumb from "./Breadcrumb"

import { updateCategory } from "../actions/"

import { CDN_BASE } from "../config"

class DatabaseCategory extends Component {
    componentDidMount() {
        this.props.onUpdate()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.slug !== prevProps.match.params.slug)
        {
            this.props.onUpdate()
        }
    }

    render() {
        const { browseRoot, data } = this.props
        return (
            <div>
            {/* Breadcrumb */}
            {data.breadcrumb && <Breadcrumb urlBase={browseRoot} trail={data.breadcrumb} />}
            {/* Page */}
            {/* TODO */}
            {/* Tiles */}
            <ul>
                {(data && data.children) && data.children.map(child => 
                    <Tile
                        key={child.slug}
                        name={child.name.en}
                        image={`${CDN_BASE}${child.icon}`}
                        to={`${browseRoot}${child.slug}`}
                    />
                )}

                {(data && data.items) && data.items.map(item => 
                    <Tile
                        key={item.guid}
                        name={item.name.en}
                        image={`${CDN_BASE}${item.icon}`}
                    />
                )}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.database.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: () => {
      dispatch(updateCategory(ownProps.project, ownProps.match.params.slug))
    }
  }
}

// I know I shouldn't do this here.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatabaseCategory)