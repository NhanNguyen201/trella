import Header from '@/components/Header'
import Board from '@/components/Board'
export default function Home() {
  return (
    <main className="flex min-h-screen max-w-5xl flex-col items-center justify-start p-4 m-auto">
      <Header />
      <Board />
    </main>
  )
}
