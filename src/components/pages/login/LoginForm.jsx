import { useState } from "react";
export default function LoginForm() {
  // state (etat, données)
  const [inputValue, setInputValue] = useState("");

  // fonctions (comportement, actions)
  const handlesubmit = (event) => {
    event.preventDefault();
    alert(`Bienvenue, ${inputValue} ! Vous êtes maintenant connecté.`);
    setInputValue("");
  };

  const handlechange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form className="space-y-6" onSubmit={handlesubmit}>
      {/* Champ Nom */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom complet
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Jean Dupont"
            required
            onChange={handlechange}
            value={inputValue}
            className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 sm:text-sm"
          />
        </div>
      </div>

      {/* Bouton Submit */}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Accedez à votre espace
        </button>
      </div>
    </form>
  );
}
