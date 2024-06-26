import { poppins } from "@/lib/fonts";

type FieldProps = {
  name: "name" | "email" | "message";
  label: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (event: { target: HTMLInputElement | HTMLTextAreaElement }) => void;
  onBlur: () => boolean;
  error: string | null;
};

const Field = ({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
}: FieldProps) => {
  return (
    <div className={"field-" + name}>
      {type !== "textarea" ? (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? `error ${poppins.className}` : poppins.className}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? `error ${poppins.className}` : poppins.className}
        />
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Field;
