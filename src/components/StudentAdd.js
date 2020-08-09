import React from "react";
export default function StudentAdd() {
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

        <div className="form-group">
          <label for="name">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
          />
          <div className="form-group">
            <label for="surname">surname</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="surname"
            />
            <div className="form-group">
              <label for="bithDate">birthDate</label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                placeholder="birthdate"
              />
              <div className="form-group">
                <label for="domain">domain</label>
                <input
                  type="text"
                  className="form-control"
                  id="domain"
                  placeholder="domain"
                />
                <div className="form-group">
                  <label for="email">email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="">
          add
        </button>
      </form>
    </div>
  );
}
