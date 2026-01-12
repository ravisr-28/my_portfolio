export default function ContentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full relative">
            {children}
        </main>
    )
}
