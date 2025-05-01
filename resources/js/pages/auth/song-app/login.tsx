import React from "react"
import { useState } from "react"
import AuthLayout from '@/layouts/auth-layout';

import { Eye, EyeOff, Facebook, Github, Home, Library, Mail, Search, X } from "lucide-react"
export default function Login(){
    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState<string | null>(null)
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">

            <div className="bg-[#121212] text-white min-h-screen">
                {/* Navigation */}
                <header className="bg-black p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <h1 className="text-2xl font-bold text-white">MusicEvolution</h1>
                        <nav className="flex space-x-2">
                            <button className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                                <Home size={16} className="mr-2" />
                                Home
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                                <Search size={16} className="mr-2" />
                                Search
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                                <Library size={16} className="mr-2" />
                                Library
                            </button>
                        </nav>
                    </div>
                </header>

                <div className="flex justify-center items-center py-16 px-4">
                    <div className="w-full max-w-md">
                        <div className="bg-[#181818] rounded-lg p-8 shadow-lg">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
                                <p className="text-gray-400">Log in to continue your musical journey</p>
                            </div>

                            {loginError && (
                                <div className="bg-red-900 bg-opacity-30 border border-red-500 text-red-200 px-4 py-3 rounded-md mb-6 flex items-center justify-between">
                                    <p>{loginError}</p>
                                    <button onClick={() => setLoginError && setLoginError(null)}>
                                        <X size={16} />
                                    </button>
                                </div>
                            )}

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 bg-[#282828] border-[#3E3E3E] rounded focus:ring-[#1DB954] focus:ring-offset-gray-800"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-[#1DB954] hover:text-[#1ED760]">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1DB954] text-black font-bold py-3 px-4 rounded-full hover:bg-[#1ED760] transition-colors"
                                >
                                    Log In
                                </button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#3E3E3E]"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-[#181818] text-gray-400">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-[#3E3E3E] rounded-md shadow-sm bg-[#282828] text-sm font-medium text-white hover:bg-[#3E3E3E] transition-colors"
                                    >
                                        <Facebook className="mr-2" size={18} />
                                        Facebook
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-[#3E3E3E] rounded-md shadow-sm bg-[#282828] text-sm font-medium text-white hover:bg-[#3E3E3E] transition-colors"
                                    >
                                        <Github className="mr-2" size={18} />
                                        GitHub
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-gray-400">
                                    Don't have an account?{" "}
                                    <a href="#" className="text-[#1DB954] hover:text-[#1ED760] font-medium">
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>

    )
}
