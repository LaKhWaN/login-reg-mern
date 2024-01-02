import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <div class="card text-center" style={{ margin: "25%", width: "50%" }}>
        <div class="card-header">Login / Registration System - MERN STACK</div>
        <div class="card-body">
          <h5 class="card-title">Home</h5>
          <Link to="/register" className="mr-3 btn btn-primary">Register</Link>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
        <div class="card-footer text-muted">
          <i>~ Upender Singh Lakhwan</i>
        </div>
      </div>
    </div>
  );
};
