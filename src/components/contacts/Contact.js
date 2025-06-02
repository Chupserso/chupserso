const Contact = (props) => {
    const { link, logo } = props;

    const onContact = () => {
        window.open(link, "_blank");
    }

    return <img src={logo} onClick={onContact} className="contact" />;
}
export default Contact;