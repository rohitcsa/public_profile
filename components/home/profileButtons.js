import classes from '../../styles/profile.module.css';

const ProfileButtons = () => {
    return (
        <div className={classes.btnContainer}><button className={classes.btngrad}>Download Resume</button>
        <button className={classes.btngrad}>Contact Me</button>
        </div>
    )
}

export default ProfileButtons;