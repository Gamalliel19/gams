const SelectedProject = () => {
    return ( 
        <section>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <a href="https://mandalore-batik.vercel.app/" className="card-image">
                            <img src="assets/Mandalore.png" alt="project" />
                        </a>
                        <div className="card-title">
                            <h3>Mandalore Batik</h3>
                        </div>
                        <div className="card-description">
                            <p>
                            The website was built to introduce regional batik motifs throughout Indonesia while preserving Indonesian batik. I built this website using React js programming language and node js to build the API.                            </p>
                        </div>
                        <div className="card-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Node JS</span>
                            <span>React JS</span>
                        </div>
                        <div className="card-footer-links">
                            <a href="https://mandalore-batik.vercel.app/">Visit Website</a>
                            <a href="https://github.com/Gamalliel19/Mandalore-Batik">Source Code</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <a href="https://gamalliel19.github.io/akm-towing-website/" className="card-image">
                            <img src="assets/akmtowing.png" alt="project" />
                        </a>
                        <h3>Mandalore Batik</h3>
                        <div className="card-description">
                            <p>
                            AKM Towing is a company for Towing and Storing services and they need to revamp their profile company website, so I revamp the landing page and implement it into their old website. I used HTML, CSS, and JavaScript to build AKM Towing Profile Company Website.
                            </p>
                        </div>
                        <div className="card-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="card-footer-links">
                            <a href="https://gamalliel19.github.io/akm-towing-website/">Visit Website</a>
                            <a href="https://github.com/Gamalliel19/akm-towing-website">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SelectedProject;