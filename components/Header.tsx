import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { userId } = auth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg font-bold text-white uppercase">
            Clerk App
          </div>
        </Link>
      </div>

      <div className="flex items-center text-white">
        {userId ? (
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <>
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
