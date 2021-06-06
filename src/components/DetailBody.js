import React from "react";
import "../styles/DetailBody.css";

function DetailBody({ users }) {
  //format the date to display
  function DateDisplay(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    // return date
    return formattedDate;
  }
  // return html including user details
  return (
    <body>
      {users[0] !== undefined && users[0].name !== undefined ? (
        // map users to corresponding html
        users.map(({ login, name, picture, phone, email, dob }) => {
          // return results in html
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="fixed-center">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className=""
                />
              </td>
              <td data-th="Name" className="name-cell fixed-center">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="fixed-center">
                {phone}
              </td>
              <td data-th="Email" className="fixed-center">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="fixed-center">
                {DateDisplay(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </body>
  );
}

export default DetailBody;
