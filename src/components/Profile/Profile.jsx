import PropTypes from "prop-types";
import css from './Profile.module.css'
import { ProfileDesc } from "components/ProfileDesc/ProfileDesc";
import { ProfileStat } from "components/ProfileStat/ProfileStat"

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
        <div className={css.profile}>
            <ProfileDesc username={username} tag={tag} location={location} avatar={avatar} />
            <ProfileStat followers={stats.followers} views={stats.views} likes={stats.likes} />
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}
