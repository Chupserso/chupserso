import Skill from "./Skill";

const Skills = (props) => {
    const {skills, title} = props;

    const skillsElements = skills.map(item => {
        return <Skill title={item} />;
    });

    return (
        <div className="skills" data-aos="fade-up">
            <h2 className="app-title">{ title }</h2>
            <ul className="skills-list">
                {skillsElements}
            </ul>
        </div>
    );
}

export default Skills;