import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container">
      <div class="card text-center" style={{ margin: "25%", width: "50%" }}>
        <div class="card-header">Register - MERN STACK</div>
        <div class="card-body">
          <h5 class="card-title">Register</h5>
          <div className="container ">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
            <br />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <br />
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter your password" />
            <br />
            <button class="mr-3 btn btn-success">Register</button>
            <Link to="/" class="btn btn-outline-primary">Go Back</Link>
          </div>
        </div>
        <div class="card-footer text-muted">
          <i>~ Upender Singh Lakhwan</i>
        </div>
      </div>
    </div>
  );
};
