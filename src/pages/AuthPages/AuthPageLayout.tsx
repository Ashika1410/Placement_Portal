// import React from "react";
// import GridShape from "../../components/common/GridShape";
// import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="relative p-6 bg-white z-1 dark:bg-gray-00 sm:p-0">
//       <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
//         <div className="items-center hidden w-full h-full lg:w-1/2 dark:bg-white/5 lg:grid">
//           <div className="relative flex items-center justify-center z-1">
//             {/* <!-- ===== Common Grid Shape Start ===== --> */}
//             <GridShape />
//           </div>
//         </div>
//         <div className="fixed z-50 hidden bottom-6 left-6 sm:block">
//           <ThemeTogglerTwo />
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }

import React from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col p-3 border border-3 lg:flex-row bg-white dark:bg-gray-900">
      {/* Left - College Image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden hidden lg:block">
        <img
          src="../images/cards/Clg-Img.png" // Replace with your actual image path
          alt="College Campus"
          className="object-cover rounded-md w-full h-full"
        />
      </div> 

      {/* Right - Auth Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-12 bg-white dark:bg-gray-800">
        {/* Theme Toggler */}
        <div className="fixed z-50 bottom-6 left-6 sm:block">
          <ThemeTogglerTwo />
        </div>

        <div className="max-w-md w-full mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
