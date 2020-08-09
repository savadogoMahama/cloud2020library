import React from "react";
export default function BookAdd() {
  return (
    <div>
      <div>
        <form>
          
          <div className="form-group">
            <label for="title">title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="title"
            />
            <div className="form-group">
              <label for="author">author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="author"
              />

              <div className="form-group">
                <label for="category">category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  placeholder="category"
                />
                <div className="form-group">
                  <label for="cote">cote</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cote"
                    placeholder="cote"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="">
            add
          </button>
        </form>
      </div>
    </div>
  );
}
