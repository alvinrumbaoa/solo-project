import React ,{useState, useEffect} from 'react';


const Register =(props) =>{




return(
    <div className="container">
    <nav>
            <img className="d2w-logo"src="D2W.PNG"  alt="d2w-logo"/>
    </nav>  
    <main>
            <div className="box-dashboard">
                <h1>Registration</h1>

                <form>  {/*add some submit handler*/}
                <p className="text">Name:  </p>    <input type="email"/> <br/>
                <p className="text">Email:  </p>    <input type="email"/> <br/>
                <p className="text">Email:  </p>    <input type="email"/> <br/>
                    <p className="text">Email:  </p>    <input type="email"/> <br/>
                    <p className="text">Password:  </p><input type="password"/> <br/>
                    <button type="submit" value="Login">Sign up</button>     
                    <hr/>            
                </form>
            </div>
        </main>
    </div>
    )
}



export default Login;

