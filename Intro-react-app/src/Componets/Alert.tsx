// import { useState } from "react";


// interface AlertProps {
//    children : string

// }





// const Alert = ({children}:AlertProps) => {

//   const [alerted, setAlerted] = useState("")

//   const handleCloseAlert = () => {
//     setAlerted("");
//   };
//   // const []
//   return (
//     <>


//     <div className="alert alert-primary" role="alert">
//    {children}

   
    
//     <p>{alerted}</p>
    
//     <button className=" btn btn-danger" onClick={() => setAlerted("I have been clicked")}>Alert Button</button>

//     </div>
//     </>
//   )
// }

// export default Alertd

import { useState } from "react";

interface AlertProps {
 children:string;
onClose: () => void;

}
const Alert = ({ children, onClose }: AlertProps) => {
  // const [alerted, setAlerted] = useState("");

 

  return (
    <>
    <div className="alert alert-primary alert-dismissible"  role="alert">
     {children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button> */}
    </>
  );
};

export default Alert;


// import { useState } from "react";

// interface AlertProps {
//   children: string;
//   alertMessage: string;
//   showButtonText: string;
//   closeButtonText: string;
// }

// const Alert = ({
//   children,
//   alertMessage,
//   showButtonText,
//   closeButtonText,
// }: AlertProps) => {
//   const [isAlertVisible, setIsAlertVisible] = useState(false);

//   const handleShowAlert = () => {
//     setIsAlertVisible(true);
//   };

//   const handleCloseAlert = () => {
//     setIsAlertVisible(false);
//   };

//   return (
//     <>
//       <div className="alert alert-primary" role="alert">
//         {isAlertVisible ? (
//           <>
//             {children}
//             <p>{alertMessage}</p>
//             <button className="btn btn-danger" onClick={handleCloseAlert}>
//               {closeButtonText}
//             </button>
//           </>
//         ) : (
//           <button className="btn btn-primary" onClick={handleShowAlert}>
//             {showButtonText}
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Alert;