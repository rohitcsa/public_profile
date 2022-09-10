import styles from "../../styles/profile.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      <div>
        <Image
          src="/images/219983.png"
          width={400}
          height={400}
          className={styles.aboutImage}
        />
      </div>
      <div>
        <p className={styles.aboutText}>About Me</p>
        <p className={styles.aboutDescription}>
          CSS Grid Layout introduces a two-dimensional grid system to CSS. Grids
          can be used to lay out major page areas or small user interface
          elements. This article introduces the CSS Grid Layout and the new
          terminology that is part of the CSS Grid Layout Level 1 specification.
          The features shown in this overview will then be explained in greater
          detail in the rest of this guide. What is a grid? A grid is a set of
          intersecting horizontal and vertical lines defining columns and rows.
          Elements can be placed onto the grid within these column and row
          lines. CSS grid layout has the following features:
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
