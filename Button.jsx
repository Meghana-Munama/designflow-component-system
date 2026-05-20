export default function Button({ children, variant = 'primary', onClick }) {
  const styles = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-600',
    secondary: 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 focus:ring-slate-400',
    subtle: 'bg-brand-50 text-brand-700 hover:bg-brand-100 focus:ring-brand-600',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
