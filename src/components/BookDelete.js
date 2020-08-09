import React from "react";
export default function BookDelete() {
  return (
    <div>
      <div className="form-group">
        <label for="code">code</label>
        <input
          type="text"
          className="form-control "
          id="code"
          placeholder="code"
        />
      </div>
      <button type="submit" className="">
        delete
      </button>
    </div>
  );
}
