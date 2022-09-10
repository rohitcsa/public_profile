import styles from "../../styles/profile.module.css";

const SkillBar = () => {
        let skills = [{
            url : '/images/css3.png',
            name : 'CSS3',
            progress: '90%'
        },{
            url : '/images/Expressjs.png',
            name : 'Express JS',
            progress: '70%'
        },{
            url : '/images/html5.png',
            name : 'HTML5',
            progress: '90%'
        },{
            url : '/images/jquery1.png',
            name : 'Jquery',
            progress: '65%'
        },{
            url : '/images/jquerymob.png',
            name : 'Jquery',
            progress: '65%'
        },{
            url : '/images/js.png',
            name : 'Javascript',
            progress: '80%'
        },{
            url : '/images/css3.png',
            name : 'Git',
            progress: '80%'
        },{
            url : '/images/next.png',
            name : 'Next JS',
            progress: '75%'
        },{
            url : '/images/node.png',
            name : 'Node JS',
            progress:'70%'
        },{
            url : '/images/react.png',
            name : 'React JS',
            progress: '80%'
        },
        {
            url : '/images/redux.png',
            name : 'Redux',
            progress: '80%'
        },
        {
            url : '/images/rn.png',
            name : 'React-Native',
            progress: '75%'
        },]
    return (
        <div className={styles.skillContainer}>
            <h1 className={styles.skillText}>My Skills</h1>
            <div className={styles.skillGrid}>
                {skills.map(data => {
                    return (<div className={styles.mainSkillBar}><div className={styles.skillBars} style={{width : data.progress}}>{data.name}</div></div>)
                })}
            </div>
        </div>
    )
}

export default SkillBar;