import PropTypes from "prop-types";
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item} style={{boxShadow: isOnline ? '0px 0px 12px 1px #04bd20' : '0px 0px 12px 1px #a80808'}}>
            <span className={css.status} style={{backgroundColor: isOnline ? '#04bd20' : '#a80808'}}></span>
            <img className={css.avatar} src={avatar} alt={name} width="60" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}