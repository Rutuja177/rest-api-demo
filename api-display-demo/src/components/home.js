import {Link} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../hook/useUser";

const Home = () =>{
    const {user} = useUser(); 
    return (
        <div className="main">
        <h3>Explore the World with REST API Demo</h3>
        <p>Welcome to the demo project, where you can embark on a virtual journey around the globe using the power of RESTful APIs. 
            this application leverages the extensive data provided by the restcountries.com API to offer you a glimpse into the diverse cultures, histories, and geographies of countries worldwide.</p>
        <p>I have integrated Firebase authentication, allowing you to register and log in seamlessly. This authentication layer ensures that you have a personalized experience, with the option to save your favorite countries, create your own lists, and share your discoveries with friends.</p>
        <p>By harnessing the capabilities of the restcountries.com API, it provides you with up-to-date information about countries, including their names, populations, languages, currencies, and more. 
            Whether you're a developer looking to understand API integration or simply a curious explorer, this demo project offers a user-friendly interface to interact with real-world data.</p>
        
        {user ? 
        <button><Link className="link" to="/display">Get to know more</Link></button>
        :<button><Link className="link" to="/login">Get to know more</Link></button>
    }
        </div>
    )

}
export default Home;