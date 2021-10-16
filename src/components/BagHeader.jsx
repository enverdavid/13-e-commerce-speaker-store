import React from "react";
import {
  Link
} from "react-router-dom";


const BagHeader = () => {
  
  return (
    <div className="mb-6 bg-gray-800 text-white h-14 flex items-center py-8">
      
        <Link to="/" className="p-4">{"< back"}</Link>
    
    </div>
  );
};

export { BagHeader };
