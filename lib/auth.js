import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase";
import { auth } from "./firebase-admin";
// import cookie from "js-cookie";
// const authContext = createContext();
// import { createUser } from "./db";

// export function AuthProvider({ children }) {
//   const auth = useProvideAuth();
//   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }
// export const useAuth = () => {
//   return useContext(authContext);
// };
// function useProvideAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const handleUser = (rawUser) => {
//     if (rawUser) {
//       const user = formatUser(rawUser);
//       const { token, ...userWithoutToken } = user;
//       createUser(user.uid, userWithoutToken);

//       setLoading(false);
//       setUser(user);

//       cookie.set("fast-feedback-auth", true, {
//         expires: 1,
//       });
//       return user;
//     } else {
//       setLoading(false);
//       setUser(false);
//       cookie.remove("fast-feedback-auth");
//       return false;
//     }
//   };
//   const signinWithGitHub = () => {
//     setLoading(true);
//     return firebase
//       .auth()
//       .signInWithPopup(new firebase.auth.GithubAuthProvider())
//       .then((response) => handleUser(response.user));
//   };
//   const signout = () => {
//     return firebase
//       .auth()
//       .signOut()
//       .then(() => handleUser(false));
//   };
//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
//     return () => unsubscribe();
//   }, []);
//   return {
//     user,
//     loading,
//     signinWithGitHub,
//     signout,
//   };
// }
// const formatUser = (user) => {
//   return {
//     uid: user.uid,
//     email: user.email,
//     name: user.displayName,
//     provider: user.providerData[0].providerId,
//     photoUrl: user.photoURL,
//     token: user.ya,
//   };
// };

const signInAuth = (uid) => {
  const cusToken = auth
    .createCustomToken(uid)
    .then((customToken) => {
      console.log("POGGERS", customToken);
      return customToken;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { signInAuth };
