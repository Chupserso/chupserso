import Project from "./Project";

const Projects = (props) => {
    const { projects, data, setData } = props;
    
    const projectsItems = projects.map(item => {
        return <Project fullDescr={item.fullDescr} stack={item.stack} title={item.title} descr={item.descr} logo={item.logo} />
    });

    return (
        <div className="projects" data-aos="fade-up">
            <h2 className="app-title">Projects</h2>
            <div className="items">
                {projectsItems}
            </div>
        </div>
    );
}

export default Projects;