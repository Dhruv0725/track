let users = [
  {
    username: "admin",
    password: "admin",
    name: "Admin User",
    firstName: "Admin",
    lastName: "User",
    designation: "Admin",
    address: "Masjid Banda, Kondapur",
    contactNumber: "9xxxxxxxx3",
    email: "adimin@beehyv.com",
    link: "https://google.com",
    language: "English",
    profilePicture: "",
  },
  {
    username: "Dhruv123",
    password: "Dhruv@0725",
    name: "Dhruv Singhal",
    firstName: "Dhruv",
    lastName: "Singhal",
    designation: "Programmer",
    address: "Masjid Banda, Kondapur",
    contactNumber: "9460597613",
    email: "dhruvsinghalms07@gmail.com",
    link: "https://google.com",
    language: "English",
    profilePicture: "",
  },

  {
    username: "hemang_123",
    password: "hmng@0725",
    name: "Hemang Singhal",
    firstName: "Hemang",
    lastName: "Singhal",
    designation: "Programmer",
    address: "Gopi Gate, Jaipur",
    contactNumber: "4473743834",
    email: "hemangsinghal2334@beehyv.com",
    link: "https://google.com",
    language: "English",
    profilePicture: "",
  },

  {
    username: "RamChandel343",
    password: "Dhruv@0725",
    name: "Ram Chandel",
    firstName: "Ram",
    lastName: "Chandel",
    designation: "Programmer",
    address: "Masjid Banda, Kondapur",
    contactNumber: "9460597613",
    email: "dhruvsinghalms07@gmail.com",
    link: "https://google.com",
    language: "Hindi",
    profilePicture: "",
  },
];

function getUsers() {
  return users;
}

function updateUser(username, updatedData) {
  const userIndex = users.findIndex((user) => user.username === username);
  //console.log("In data file");
  //console.log(updatedData);
  if (userIndex !== -1) {
    for (const prop in updatedData) {
      if (users[userIndex].hasOwnProperty(prop) && updatedData[prop] !== null) {
        users[userIndex][prop] = updatedData[prop];
        // console.log(prop);
        if (prop == "firstName" || prop == "lastName") {
          //   console.log(prop);
          users[userIndex]["name"] =
            users[userIndex]["firstName"] + " " + users[userIndex]["lastName"];
        }
      }
    }
  }
}

export { getUsers, updateUser };
