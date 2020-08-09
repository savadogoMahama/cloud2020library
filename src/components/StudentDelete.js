import React from "react";
export default function StudentDelete() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="matricule">matricule</label>
          <input
            type="text"
            className="form-control "
            id="matricule"
            placeholder="matricule"
          />
        </div>
        <button type="submit" className="">
          delete
        </button>
      </form>
    </div>
  );
}
