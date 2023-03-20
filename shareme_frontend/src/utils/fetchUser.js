// export const fetchUser = () => {
//   const userInfo =
//     localStorage.getItem("user") !== "undefined"
//       ? JSON.parse(localStorage.getItem("user"))
//       : localStorage.clear();
//   return userInfo;
// };
export const fetchUser =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();
