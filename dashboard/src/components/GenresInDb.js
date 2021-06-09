import React, {useEffect, useState} from "react";

/* Ver para que lo podemos utilizar */

function GenresInDb() {
  const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('/api/user')
            .then( r => r.json())
            .then( data => {
                setUsers(data.data);
		    })
            .catch(error => console.log(error));
	}, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Users in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {
							users.length > 0 && users.map((user, i) => {
								return (
									<div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{user.name}</div>
                    </div>
                  </div>
								)
							})
						}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;