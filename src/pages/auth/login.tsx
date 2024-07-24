import AuthLayout from "@/components/layouts/auth-layout";
import appLogo from "../../assets/app-logo.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const Login = () => {
  return (
    <AuthLayout title="Empower HR - Login" description="Login Empower HR">
      <div className="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="lg:mt-16 md:mt-12 mt-4 lg:px-0 px-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white border dark:bg-gray-700 px-4 pb-4 pt-6 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
            <img src={appLogo} alt="" className="w-3/4 -ml-3 my-2" />
            <h1 className="text-xl font-semibold text-gray-600 dark:text-white">
              Sign in
            </h1>
            <form className="space-y-4 my-4">
              <div>
                <Label htmlFor="email">Email*</Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    type="text"
                    data-testid="username"
                    defaultValue=""
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Password *</Label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    data-testid="password"
                    defaultValue=""
                  />
                </div>
              </div>

              <div>
                <button
                  data-testid="login"
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-skyBlue px-4 py-2 text-sm font-medium text-white hover:bg-skyBlue/80"
                >
                  Sign In
                </button>
              </div>
            </form>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex space-x-2">
              <a
                href="/kebijakan-privasi"
                className="text-gray-400 hover:underline text-xs"
              >
                Kebijakan privasi
              </a>
              <span className="-mt-1">•</span>
              <a
                href="/ketentuan-pengguna"
                className="text-gray-400 hover:underline text-xs"
              >
                Ketentuan pengguna
              </a>
              <span className="-mt-1">•</span>
              <a
                href="/tentang-empower-hr"
                className="text-gray-400 hover:underline text-xs"
              >
                Tentang Empower HR
              </a>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
