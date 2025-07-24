"use client";
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession, signIn, SignInResponse } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res: SignInResponse | undefined = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <main className="min-h-screen min-w-screen justify-self-center flex flex-wrap bg-white">
      <div className="w-full md:w-7/12 px-4 sm:px-8 md:px-24 py-10 md:py-12">
        <div className="flex flex-col justify-center w-full md:w-md justify-self-center">
          <div className="mb-10">
            <Image src="/logo1.png" alt="Primarily Logo" width={100} height={40} priority />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600 mb-8">Log in to your account.</p>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="email" className="block text-sm text-black mb-1">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="w-full border-0 border-b border-gray-300 text-black bg-transparent px-0 py-2 text-base focus:ring-0 focus:border-emerald-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm text-black mb-1">Password</label>
                <a href="#" className="text-xs text-blue-500 hover:underline">Forgot password?</a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full text-black border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-base focus:ring-0 focus:border-emerald-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <button
              type="submit"
              className={`w-full bg-emerald-500 font-semibold py-3 rounded mt-2 flex items-center justify-center gap-2 cursor-pointer${email && password ? '' : ' opacity-100 cursor-not-allowed'}`}
              disabled={!email || !password || loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="flex items-center my-7">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center gap-3 border border-gray-200 rounded py-2 px-4 bg-white hover:bg-gray-50 transition cursor-pointer"
            >
              <Image src="/google.png" alt="Google" width={20} height={20} />
              <span className="flex-1 text-center text-gray-700 font-medium">Sign in with Google</span>
            </button>
            <button
              type="button"
              onClick={() => signIn("apple")}
              className="w-full flex items-center gap-3 border border-gray-200 rounded py-2 px-4 bg-white hover:bg-gray-50 transition cursor-pointer"
            >
              <Image src="/apple.png" alt="Apple" width={20} height={20} />
              <span className="flex-1 text-center text-gray-700 font-medium">Sign in with Apple</span>
            </button>
            <button
              type="button"
              onClick={() => signIn("sso")}
              className="w-full flex items-center gap-3 border border-gray-200 rounded py-2 px-4 bg-white hover:bg-gray-50 transition cursor-pointer"
            >
              <span className="flex-1 text-center text-gray-700 font-medium">Sign in with SSO</span>
            </button>
          </div>
          <div className="mt-10 text-center text-sm text-gray-500">
            New here?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Create an account
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-[#fafafa]">
        <img src="/login.png" alt="Primarily Login Illustration" className="max-w-full h-auto"/>
      </div>
    </main>
  );
}
