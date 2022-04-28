import "./About.css";

const About = () => {
    return(
        <div className="section">

            <div className="row">
                <div className="col-md-7">
                    <img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="about"/>
                </div>
                <div className="col-md-5">
                    <div className="text">
                        <h1 className="display-4">Best Foodie Page</h1>
                        <p className="lead">This magical, marvelous food on our plate, this sustenance we absorb, has a story to tell. It has a journey.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;