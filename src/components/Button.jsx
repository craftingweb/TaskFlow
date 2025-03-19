export default function Button({ children, ...props }) {
  return (
    <button
      className="text-sm md:text-base px-4 py-2 bg-stone-600 rounded-lg text-stone-400 hover:bg-stone-700 hover:text-stone-200 mt-4"
      {...props}
    >
      {children}
    </button>
  );
}
