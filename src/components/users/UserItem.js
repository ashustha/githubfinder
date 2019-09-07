import React from 'react'
import PropTypes from 'prop-types';

const userItem = ({user: {login, avatar_url, html_url}}) => {
        return (
            <div className="card d-flex align-items-center p-3">
                <img src = {avatar_url} alt="" className="rounded-circle" style={{width: '60px'}}/>
                <h3>{login}</h3>
                <a className="btn btn-info" target="_blank" href={html_url}>More</a>
            </div>
        )
};

userItem.prototypes = {
    user: PropTypes.object.isRequired,
}

export default userItem
