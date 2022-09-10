import classes from '../../styles/profile.module.css';

const NameComponent = () => {
    return (<div className={classes.displayBlock}><p className={classes.profileName}>Rohit Gupta</p>
    <p className={classes.subTitle}>Frontend Developer</p></div>)
}

export default NameComponent;