import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="Form">
      <div className="row mb-4">
        <div className="col-10">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            autoComplete="off"
          />
          <small className="form-text text-muted d-none d-md-block">
            Enter city (<em>e.g.</em>, Toronto) or city and 2-letter country
            code (<em>e.g.</em>, Melbourne, AU).
          </small>
          <small className="form-text text-muted d-block d-md-none">
            <em>e.g.</em>, Toronto or Melbourne, AU
          </small>
        </div>
        <div className="col-1 p-0 d-none d-md-block">
          <button className="btn btn-outline-primary w-10" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="col-1 p-0">
          <button className="btn btn-outline-primary w-10" type="submit">
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
