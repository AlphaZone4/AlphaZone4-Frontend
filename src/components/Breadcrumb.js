import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Breadcrumb = ({ trail, urlBase }) => 
    <ol className="breadcrumb">
        {trail.map((crumb, i) => 
            <li key={crumb.slug} className={i<trail.length-1 && "active"}>
                {i<trail.length-1 ?
                <Link to={`${urlBase}${crumb.slug}`}>
                    {crumb.name.en}
                </Link>
                :
                <span>{crumb.name.en}</span>
                }
            </li>
        )}
    </ol>

Breadcrumb.propTypes = {
    trail: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.shape({
            en: PropTypes.string.isRequired
        }),
        slug: PropTypes.string.isRequired
    }).isRequired).isRequired,
    urlBase: PropTypes.string
}

export default Breadcrumb