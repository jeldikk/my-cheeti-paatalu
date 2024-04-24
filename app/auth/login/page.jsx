import LoginForm from "@/components/login-form/login-form";

async function LoginPage() {
  return (
    <div className="login-page">
      <div className="container min-h-screen flex items-center gap-5">
        <div className="page-banner w-2/3 p-8">
          <h1 className="text-7xl text-red-800">Hi, There</h1>
          <div className="text-5xl font-thin">How are you doing today</div>
          <div className="text-xl my-10">Login to access your records</div>
        </div>
        <div className="login-form w-1/3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
