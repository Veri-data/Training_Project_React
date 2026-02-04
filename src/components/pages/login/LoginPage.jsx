import LoginButonSociaux from "./LoginButonSociaux";
import LoginForm from "./LoginForm";
import LoginFormTitle from "./LoginFormTitle";

const LoginPage = () => {
  
  // rendu (affichage)
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
     <LoginFormTitle/>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
         <LoginForm/>
          {/* Séparateur */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Ou continuer avec
                </span>
              </div>
            </div>
           <LoginButonSociaux/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
