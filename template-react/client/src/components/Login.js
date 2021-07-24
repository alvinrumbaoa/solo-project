import React ,{useState, useEffect} from 'react';


const Login =(props) =>{




return(
    <div className="container">
    <nav>
            <img className="d2w-logo"src="D2W.PNG"  alt="d2w-logo"/>
    </nav>  
    <main>
            <div className="box-dashboard">
                <h1>Sign In</h1>

                <form>  {/*add some submit handler*/}
                    <p className="text">Email:  </p>    <input type="email"/> <br/>
                    <p className="text">Password:  </p><input type="password"/> <br/>
                    <button type="submit" value="Login">Log In</button>     
                    <hr/>            
                    </form>
                {/* Link router for registration  */}
                <button  type="submit" value="New Registration">New Registration </button>
            </div>
        </main>
    </div>
    )
}



export default Login;

