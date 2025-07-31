import React from "react";
import { LuSparkles, LuX } from "react-icons/lu";


// const Drawer = ({ isOpen, onClose, title, children }) => {
//   return (
//     <div
//       className={`fixed top-[70px] right-0 z-40 h-[calc(100dvh-70px)] p-4 overflow-y-auto transition-transform bg-white w-full md:w-[35vw] shadow-2xl shadow-cyan-800/10 border-r border-l-gray-800 ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//       tabIndex="-1"
//       aria-labelledby="drawer-right-label"
//     >
//       {/* Header */}
//       <div className=" flex items-start justify-between  mb-4 border-b border-gray-200 ">
//         <div className="flex flex-col items-start gap-3">
//           <span className=" flex items-center gap-2  bg-cyan-100/60 text-xs text-sky-500  font-medium px-3 py-0.5 rounded-full text-nowrap">
//             <LuSparkles />
//             Summarize this post
//           </span>

//         <h5 
//           id="drawer-right-label" 
//           className=" flex items-center text-base font-semibold text-black"
//         >
//           {title}
//         </h5>
//         </div>

//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={onClose}
//           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
//             rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center transition-all duration-600"
//           // aria-label="Close drawer"
//         >
//           <LuX className="text-lg" />
//         </button>
//       </div>

//       {/* Body Content */}
//       {/* <div className=" text-sm mx-3 mb-6 overflow-y-auto custom-scrollbar-hide  ">
//         {children}
//       </div> */}

//       <div
//         className="text-sm mx-3 mb-6"
//         style={{
//           overflowY: "auto",
//           scrollbarWidth: "none",         // Firefox
//           msOverflowStyle: "none"         // IE & Edge
//         }}
//       >
//         <style>
//           {`
//             /* Chrome, Safari, Edge (WebKit browsers) */
//             div::-webkit-scrollbar {
//               display: none;
//             }
//           `}
//         </style>
//         {children}
//       </div>


       

//     </div>
//   );
// };

 

const Drawer = ({ isOpen, onClose, title, children }) => {
  return (
    <div
    // border-l border-l-gray-200
      className={`fixed top-[70px] right-0 z-40 bg-white w-full md:w-[34vw] shadow-2xl 
        shadow-cyan-800/10   transition-transform duration-300 
        ease-in-out ${ isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
      style={{
        height: "calc(100dvh - 70px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Chrome/Safari scrollbar hide */}
      <style>
        {`
          .hide-scrollbar {
            scrollbar-width: none;          /* Firefox */
            -ms-overflow-style: none;       /* IE and Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;                  /* Chrome, Safari */
          }
        `}
      </style>

      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b border-gray-200">
        <div className="flex flex-col items-start gap-3">
          <span className="flex items-center gap-2 bg-cyan-100/60 text-xs text-sky-500 
            font-medium px-3 py-0.5 rounded-full text-nowrap">
            <LuSparkles />
            Summarize this post
          </span>
          <h5
            id="drawer-right-label"
            className="text-base font-semibold text-black"
          >
            {title}
          </h5>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
            rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center transition-all duration-600"
        >
          <LuX className="text-lg" />
        </button>
      </div>

      {/* Scrollable body */}
      <div
        className="hide-scrollbar text-sm px-4 py-3 overflow-y-auto"
        style={{
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

 


export default Drawer;