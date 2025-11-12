import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/30">
            <div className="container-max text-center">
                <div className="card p-8 max-w-2xl mx-auto">
                    <div className="text-6xl mb-4">🚀</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#24292f] dark:text-[#f0f6fc] mb-6 font-display">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-xl text-[#656d76] dark:text-[#8b949e] mb-8 leading-relaxed">
                        The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="btn-primary text-lg px-8 py-3">
                            Go Back Home
                        </Link>
                        <Link href="/#contact" className="btn-outline text-lg px-8 py-3">
                            Contact Us
                        </Link>
                    </div>
                    <div className="mt-8 text-sm text-[#656d76] dark:text-[#8b949e]">
                        If you believe this is an error, please <Link href="/#contact" className="text-[#0969da] dark:text-[#58a6ff] hover:underline">let us know</Link>.
                    </div>
                </div>
            </div>
        </div>
    )
}
