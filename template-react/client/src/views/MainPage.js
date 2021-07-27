import React from 'react';


const MainPage = ( )=>{

 
    return(
        <div className="container" >
        <nav>
                <img className="d2w-logo"src="D2W.PNG"  alt="d2w-logo"/>
        </nav>  
            <div className="box-dashboard-2">
                 <table className="table-wrapper">
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Port</th>
                        <th>Destination</th>
                        <th>FEU</th>
                        <th>Spec</th>
                        <th>Inquire</th>
                    </tr>
                    <tr>
                        <td>08/2/2021</td>
                        <td>Available</td>
                        <td>HOU</td>
                        <td>NY/NJ</td>
                        <td>30</td>
                        <td>Ref</td>
                        <td><button>Inquire</button></td>
                    </tr>
                    <tr>
                        <td>08/2/2021</td>
                        <td>Available</td>
                        <td>HOU</td>
                        <td>NY/NJ</td>
                        <td>30</td>
                        <td>Ref</td>
                        <td><button>Inquire</button></td>
                    </tr>
                    <tr>
                        <td>08/2/2021</td>
                        <td>Available</td>
                        <td>HOU</td>
                        <td>NY/NJ</td>
                        <td>30</td>
                        <td>Ref</td>
                        <td><button>Inquire</button></td>
                    </tr>
                    <tr>
                        <td>08/2/2021</td>
                        <td>Available</td>
                        <td>HOU</td>
                        <td>NY/NJ</td>
                        <td>30</td>
                        <td>Ref</td>
                        <td><button>Inquire</button></td>
                    </tr>
                    </table>    
            </div>
        </div>
    )
}

export default MainPage;

