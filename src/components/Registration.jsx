import React from "react";

function Registration() {

  return (

    <div className="container mt-4">

      <h2>Registration Form</h2>

      <form className="mt-4">

        <div className="row mb-3">

          <div className="col">
            <input
              className="form-control"
              placeholder="First Name"
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              placeholder="Last Name"
            />
          </div>

        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Street Address"
          />
        </div>

        <div className="row mb-3">

          <div className="col">
            <input
              className="form-control"
              placeholder="City"
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              placeholder="Zip"
            />
          </div>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Birth Date
          </label>

          <input
            type="date"
            className="form-control"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Gender
          </label>

          <div>
            <input type="radio" name="gender"/> Female
            <input type="radio" name="gender" className="ms-3"/> Male
          </div>

        </div>

        <button className="btn btn-primary">
          Submit
        </button>

      </form>

    </div>

  );

}

export default Registration;