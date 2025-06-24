// import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// type UserData = {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   image?: string;
// };

// export type AuthContextType = {
//   user: UserData | null;
//   token: string | null;
//   login: (user: UserData, token: string) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<UserData | null>(null);
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       const storedToken = localStorage.getItem("token");

//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//       if (storedToken) {
//         setToken(storedToken);
//       }
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//       console.warn("Corrupted localStorage data. Clearing...");
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//     }
//   }, []);

//   const login = (userData: UserData, authToken: string) => {
//     setUser(userData);
//     setToken(authToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", authToken);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         login,
//         logout,
//         isAuthenticated: !!user && !!token,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

