import React from 'react';
import { useState } from "react"
import MyLayoutTemplate from '@/layouts/templates/my-layout-template';

import { Eye, EyeOff, Facebook, Github, Mail, X } from "lucide-react"

export default function SignUp(){
    const [showPassword, setShowPassword] = useState(false)
    const [signupSuccess, setSignupSuccess] = useState(false)
    return (
        <MyLayoutTemplate>
            <div className="bg-[#121212] text-white min-h-screen">
                <div className="flex justify-center items-center py-16 px-4">
                    <div className="w-full max-w-md">
                        <div className="bg-[#181818] rounded-lg p-8 shadow-lg">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-2">Create your account</h2>
                                <p className="text-gray-400">Join the community of music evolution enthusiasts</p>
                            </div>

                            {signupSuccess && (
                                <div
                                    className="bg-green-900 bg-opacity-30 border border-green-500 text-green-200 px-4 py-3 rounded-md mb-6 flex items-center justify-between">
                                    <p>Account created successfully! Check your email to verify your account.</p>
                                    <button onClick={() => setSignupSuccess && setSignupSuccess(false)}>
                                        <X size={16} />
                                    </button>
                                </div>
                            )}

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="first-name"
                                            className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            id="last-name"
                                            className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="signup-email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="signup-email"
                                            className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                        <Mail
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            size={18} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="signup-password" className="block text-sm font-medium mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="signup-password"
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
                                    <p className="mt-1 text-xs text-gray-400">
                                        Password must be at least 8 characters with a number and a special character
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="music-preferences" className="block text-sm font-medium mb-2">
                                        What are you most interested in?
                                    </label>
                                    <select
                                        id="music-preferences"
                                        className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                    >
                                        <option>Both covers and samples</option>
                                        <option>Primarily cover songs</option>
                                        <option>Primarily sampled music</option>
                                        <option>I'm just exploring</option>
                                    </select>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        className="h-4 w-4 bg-[#282828] border-[#3E3E3E] rounded focus:ring-[#1DB954] focus:ring-offset-gray-800"
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                                        I agree to the{" "}
                                        <a href="#" className="text-[#1DB954] hover:text-[#1ED760]">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-[#1DB954] hover:text-[#1ED760]">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1DB954] text-black font-bold py-3 px-4 rounded-full hover:bg-[#1ED760] transition-colors"
                                >
                                    Create Account
                                </button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#3E3E3E]"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-[#181818] text-gray-400">Or sign up with</span>
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
                                    Already have an account?{" "}
                                    <a href="#" className="text-[#1DB954] hover:text-[#1ED760] font-medium">
                                        Log in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyLayoutTemplate>
    );
}
