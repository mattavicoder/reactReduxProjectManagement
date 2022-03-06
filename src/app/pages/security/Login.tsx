import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center m-auto mt-20 gap-3 flex-col bg-white w-3/6">
      <div>
        <input type="text" placeholder="email" />
      </div>
      <div>
        <input type="text" placeholder="password" />
      </div>
    </div>
  );
};

export default Login;
