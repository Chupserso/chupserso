import Contact from "./Contact";
import { Element } from "react-scroll";

const Contacts = (props) => {
    const { contacts } = props;

    const contactsItems = contacts.map(item => {
        return <Contact link={item.link} logo={item.logo} />;
    });

    return (
        <Element name="contacts">
            <div className="contacts">
                <div className="contacts-items">
                    {contactsItems}
                </div>
            </div>
        </Element>
    );
}
export default Contacts;