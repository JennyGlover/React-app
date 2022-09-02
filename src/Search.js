import React from "react";

import "./styles.css";

export default function Search() {
  return (
    <form id="sear-form" class="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type in city..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100 search-button"
          />
        </div>
      </div>
    </form>
  );
}
