import React from "react";
import { Link } from "react-router";
import { FaGoogle, FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gray-600 flex items-center justify-center px-4">
            <div className="bg-white p-4 rounded-xl max-w-[400px] shadow-md w-full space-y-2 pb-6 mx-4">
                <h1 className="font-bold text-md text-center">Register Now</h1>

                <form className="space-y-4">
                    <div>
                        <label className="inline-block text-base font-semibold text-gray-800">
                            Email:
                        </label>
                        <input
                            type="email"
                            placeholder="write your email"
                            className="w-full px-4 py-1.5 focus:outline-none focus:ring-1 border rounded-md text-sm"
                        />
                    </div>

                    <div>
                        <label className="inline-block text-base font-semibold text-gray-800">
                            Password:
                        </label>
                        <input
                            type="password"
                            placeholder="write your password"
                            className="w-full px-4 py-1.5 focus:outline-none focus:ring-1 border rounded-md text-sm"
                        />
                    </div>

                    <button className="bg-blue-600 w-full px-4 py-1.5 rounded-md text-white hover:bg-blue-700 transition mt-2">
                        Sign up
                    </button>
                </form>

                <h1 className="text-black text-sm text-center mt-4">
                    Or sign up with
                </h1>

                <section className="flex items-center gap-2 mt-6">
                    <button className="cursor-pointer w-full bg-white px-4 py-2 rounded shadow-xl border border-blue-400 hover:bg-gray-600 transition">
                        <span className="flex items-center justify-center gap-1 text-sm">
                            <FaGoogle className="text-blue-600 text-xl" />
                            Google
                        </span>
                    </button>

                    <button className="cursor-pointer w-full bg-white px-4 py-2 rounded shadow-xl border border-blue-400 hover:bg-gray-600 transition">
                        <span className="flex items-center justify-center gap-1 text-sm">
                            <FaSquareGithub className="text-blue-600 text-xl" />
                            GitHub
                        </span>
                    </button>

                    <button className="cursor-pointer w-full bg-white px-4 py-2 rounded shadow-xl border border-blue-400
                         hover:bg-gray-600 transition">
                        <span className="flex items-center justify-center gap-1 text-sm">
                            <FaFacebookSquare className="text-blue-600 text-xl" />
                            Facebook
                        </span>
                    </button>
                </section>

                <p className="p-2 text-center font-semibold">
                    Have an account?{" "}
                    <Link className="text-blue-600 hover:underline" to="/login">
                        Please LogIn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;

