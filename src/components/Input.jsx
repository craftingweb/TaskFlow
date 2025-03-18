export default function Input({ textarea, label, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none text-stone-600 focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-stone-500 block">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input {...props} className={classes} />
      )}
    </p>
  );
}
