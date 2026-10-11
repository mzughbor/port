import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <Navbar />
      <main className="w-full">
        <Hero />
      </main>
    </div>
  );
}