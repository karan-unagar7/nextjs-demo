'use client'
import { Button } from "@react-email/components"
import { User } from "next-auth"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
    const { data: session } = useSession()
    const user: User = session?.user as User;
    return (
        <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <a href="#" className="text-xl font-bold mb-4 md:mb-0">
                    True Feedback
                </a>
                {session ? (
                    <>
                        <span className="mr-4">
                            Welcome, {user.username || user.email}
                        </span>
                        {/* <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 rounded cursor-pointer text-black" style={{ padding: '5px 8px' }}>
                            Logout
                        </Button> */}
                        <Link href="/" onClick={()=>signOut()} className="bg-slate-100 rounded text-black cursor-pointer px-3 py-1">Log-Out
                        </Link>
                    </>
                ) : (
                    <Link href="/sign-in" className="bg-slate-100 rounded text-black cursor-pointer px-3 py-1">Login
                        {/* <Button className="w-full md:w-auto bg-slate-100 rounded text-black cursor-pointer" style={{ padding: '5px 8px' }}>Login</Button> */}
                    </Link>

                )}
            </div>
        </nav>
    )
}