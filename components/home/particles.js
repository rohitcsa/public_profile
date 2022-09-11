import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import LinkedinBadge from './limkedinBadge';
import NameComponent from './name';
import ProfileButtons from './profileButtons';
import SkillDetails from './skills';
import styles from '../../styles/Home.module.css';

const ParticleComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  let particlesOptions = {
    background: {
      color: {
        value: "#1e1e1e",
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        // speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 30,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return (
    <div className={styles.particleContainer}>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    ></Particles>
    <div className={styles.relative}>
      <div className={styles.displayFlex}>
      <NameComponent />
      {/* <LinkedinBadge /> */}
      </div>
      {/* <SkillDetails /> */}
      <ProfileButtons />
      </div>
    </div>
  );
};

export default ParticleComponent;