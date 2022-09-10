import AboutMe from '../components/about/aboutme';
import ParticleComponent from '../components/home/particles';
import SkillBar from '../components/skillbars/skillbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <ParticleComponent />
    </div>
    <div className={styles.relative}>
      <AboutMe />
      <SkillBar />
    </div>
    </>
  )
}
