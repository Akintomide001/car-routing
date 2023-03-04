import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
    const styles = { display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }

    return (
        <div style={styles} className="landing-info">
            <div>
                <h1>
                    Welcome to our database
                </h1>
                <p>This database is about people and their car</p>
                <Link to="/Database/people"><button>Go to database</button></Link>
                
            </div>
        </div>
    )
}

export default Landing