import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center p-3">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default SignInPage;
