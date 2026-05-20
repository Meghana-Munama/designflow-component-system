import Navbar from './components/Navbar.jsx';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import InputField from './components/InputField.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Academic Frontend Project</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            DesignFlow Component System
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A React-based design system prototype focused on reusable UI components, responsive layouts,
            accessibility, and scalable frontend architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="subtle">Subtle Action</Button>
          </div>
        </section>

        <section id="components" className="mt-12 grid gap-6 md:grid-cols-3">
          <Card title="Reusable Components" description="Button, card, input, and navigation components built with clean props and reusable styles." />
          <Card title="Responsive Layouts" description="Layouts designed to work across desktop, tablet, and mobile screen sizes." />
          <Card title="Design Tokens" description="Shared styling values for consistent spacing, color, typography, and UI behavior." />
        </section>

        <section id="accessibility" className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Accessible Form Example</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This sample form demonstrates semantic labels, visible focus states, and keyboard-friendly controls.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <InputField id="name" label="Full Name" placeholder="Enter your name" />
            <InputField id="email" label="Email Address" placeholder="name@example.com" />
          </div>
        </section>
      </main>
    </div>
  );
}
