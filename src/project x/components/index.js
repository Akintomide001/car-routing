import React from 'react';
import { render} from 'react-dom';
import {Header} from "./header";
import {Home} from "./home"

export function Main() {
    const hobbies={
        hobby1 : "playing videos games "
    }
     return(
        <div className='container'>
            <div className='row'>
                <Header/>
             </div>
             <div className='row'>
                <Home name={"tommy"} age={24} hobby={hobbies}>
                   
                    </Home>
             </div>
        </div>
    )
}

export default Main