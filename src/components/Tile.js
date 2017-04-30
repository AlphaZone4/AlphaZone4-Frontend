import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import "../css/database.css";

const Tile = ({ name, image, to, onClick }) => {
    if (!name) name = "???";
    return (
        <li id="{{item.id}}" className="Tile-li">
            <Link
                to={to ? to : ""}
                onClick={
                    onClick ? 
                        // if onClick is set, prevent default to stop Link firing, and execute onClick function
                        (e) => {e.preventDefault(); onClick();} :
                        // if onClick NOT set, check if to was set. If it isn't don't do default as this will kick us to app root
                        (e) => {if (!to) e.preventDefault()}
                }
                className="Tile thumbnail">
                <img className="Tile-img" alt={name} src={image ? image : "https://cdn.alphazone4.com/icons/9/4/b/7/94b7727e-9dd3-40c2-b382-c1550add5c3b.png"} />
                <p className='Tile-caption'>
                    {name}
                </p>
                {/*<div className='Tile-footer'>
                    <i className="fa fa-thumbs-down fa-lg Tile-thumbsdown"></i>
			        <i className="fa fa-thumbs-up fa-lg Tile-thumbsup"></i>
                </div>*/}
            </Link>
        </li>
    )
}

Tile.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func
}

export default Tile