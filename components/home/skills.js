import Image from "next/image";
import classes from "../../styles/profile.module.css";

const SkillDetails = () => {
  let skills = [
    {
      url: "/images/css3.png",
      name: "CSS3",
    },
    {
      url: "/images/Expressjs.png",
      name: "Express JS",
    },
    {
      url: "/images/html5.png",
      name: "HTML5",
    },
    {
      url: "/images/jquery1.png",
      name: "Jquery",
    },
    {
      url: "/images/jquerymob.png",
      name: "Jquery",
    },
    {
      url: "/images/js.png",
      name: "Javascript",
    },
    {
      url: "/images/css3.png",
      name: "Git",
    },
    {
      url: "/images/next.png",
      name: "Next JS",
    },
    {
      url: "/images/node.png",
      name: "Node JS",
    },
    {
      url: "/images/react.png",
      name: "React JS",
    },
    {
      url: "/images/redux.png",
      name: "Redux",
    },
    {
      url: "/images/rn.png",
      name: "React-Native",
    },
  ];
  return (
    <div className={classes.displayGrid}>
      {skills.map((data, i) => {
        return (
          <div className={classes.imageBox} key={i}>
            <Image src={data.url} alt={data.name} width={50} height={50} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillDetails;
