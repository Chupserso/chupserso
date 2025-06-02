import "@sweetalert2/theme-dark/dark.css";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const Project = (props) => {
    const {title, descr, fullDescr, logo, stack} = props;

    const onProject = () => {
        Swal.fire({
            title: title,
            html: `${fullDescr}<br />${stack}`,
            imageUrl: logo,
            imageWidth: 300,
            imageAlt: "Custom image"
          });
    }

    return (
        <div className="item" onClick={onProject}>
            <div className="item-logo">
                <img src={logo} alt="project-logo" />
            </div>
            <div className="item-texts">
                <h2 className="item-title">{title}</h2>
                <p className="item-descr">{descr}<br/>{stack}</p>
            </div>
        </div>
    );
}

export default Project;