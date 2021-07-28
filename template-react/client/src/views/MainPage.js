import React from 'react';
import Logout from '../components/Logout';
import {Link} from '@reach/router';
import Logout from '../components/Logout';

const MainPage = ( )=>{



    return(
        <div className="container" >
        <nav>
            <Link to="/">
            <img className="d2w-logo"src="D2W.PNG"  alt="d2w-logo"/>
            </Link>
            <Logout/>
        </nav>  
        <h1 className="main-text">Welcome user_name</h1>
            <div className="box-dashboard-2">
                <table className="table-wrapper">          
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Port</th>
                                <th>Destination</th>
                                <th>FEU</th>
                                <th>Spec</th>
                                <th>Inquire</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="date" id="date" name="available-date" value="2021-08-02"/></td>
                                <td><img src="/images/available.png" alt="left" width="30" height="30" />Available</td>
                                <td><img src="/images/left-arrow.png" alt="left" width="30" height="30" />HOU</td>
                                <td><img src="/images/right-arrow.png" alt="right" width="30" height="30" />NY/NJ</td>
                                <td>40</td>
                                <td><img src="/images/caution.png" alt="right" width="30" height="30" />Haz</td>
                                <td><button>Inquire</button></td>
                            </tr>
                            <tr>
                                <td><input type="date" id="date" name="available-date" value="2021-08-02"/></td>
                                <td><img src="/images/available.png" alt="left" width="30" height="30" />Available</td>
                                <td><img src="/images/left-arrow.png" alt="left" width="30" height="30" />HOU</td>
                                <td><img src="/images/right-arrow.png" alt="right" width="30" height="30" />NY/NJ</td>
                                <td>30</td>
                                <td><img src="/images/winter (1).png" alt="right" width="30" height="30" />Ref</td>
                                <td><button>Inquire</button></td>
                            </tr>
                            <tr className= "reserved-status">
                                <td><input className="disabled-date" type="date" id="date" name="available-date" value="2021-08-02"/></td>
                                <td><img src="/images/stop.png" alt="left" width="30" height="30" />Reserved</td>
                                <td><img src="/images/left-arrow.png" alt="left" width="30" height="30" />HOU</td>
                                <td><img src="/images/right-arrow.png" alt="right" width="30" height="30" />NY/NJ</td>
                                <td>0</td>
                                <td>None</td>
                                <td><button className="reserved"><strike>Reserved</strike></button></td>
                            </tr>
                            <tr>
                                <td><input type="date" id="date" name="available-date" value="2021-08-02"/></td>
                                <td><img src="/images/available.png" alt="left" width="30" height="30" />Available</td>
                                <td><img src="/images/left-arrow.png" alt="left" width="30" height="30" />HOU</td>
                                <td><img src="/images/right-arrow.png" alt="right" width="30" height="30" />NY/NJ</td>
                                <td>120</td>
                                <td><img src="/images/winter (1).png" alt="right" width="30" height="30" />Ref</td>
                                <td><button>Inquire</button></td>
                            </tr> 
                        </tbody>             
                    </table>    
                    <img src="/images/FREIGHT2.PNG"  alt="story" width="300" height="300" />
            </div>
        </div>
    )
}

export default MainPage;

