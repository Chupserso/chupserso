const Skill = (props) => {
    const { title } = props

    return (
        <li className="skill">
            { title }
        </li>
    );
}

export default Skill;