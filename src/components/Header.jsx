import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3 border-b-2">
        <div className="flex items-center justify-between max-w-screen-xl">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          <div className="flex items-center gap-5 text-lg font-semibold">
            <Link to="/" className="text-gray-700 hover:text-primary-700">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-700">
              About
            </Link>

            <li className="list-none flex items-center">
              <SignedOut>
                <SignInButton className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                  Log in
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
