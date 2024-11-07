export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full flex justify-center">
            <div className="mt-40 max-w-lg">
                <div
                    className="
                        flex
                        flex-col
                        bg-white
                        border
                        border-neutral-200
                        rounded-lg
                        shadow-sm
                        p-10
                    "
                >
                    {children}
                </div>
            </div>
        </main>
    );
}