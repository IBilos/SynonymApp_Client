import type { ReactNode } from "react"

export default function Layout({children}:{children:ReactNode}){
    return (
        <main className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold text-center mb-6">Sinonimi</h1>
                {children}
            </div>
        </main>
    )
}