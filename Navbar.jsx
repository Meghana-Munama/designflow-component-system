import { Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Layers className="h-5 w-5 text-brand-600" aria-hidden="true" />
          DesignFlow
        </div>
        <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#components" className="hover:text-brand-700">Components</a>
          <a href="#accessibility" className="hover:text-brand-700">Accessibility</a>
          <a href="#tokens" className="hover:text-brand-700">Design Tokens</a>
        </div>
      </nav>
    </header>
  );
}
