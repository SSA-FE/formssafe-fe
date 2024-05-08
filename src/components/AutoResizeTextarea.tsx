import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface AutoResizeTextareaProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  fieldName: Path<T>;
  placeholder: string;
  className: string;
}

const AutoResizeTextarea = <T extends Record<string, unknown>>({
  register,
  fieldName,
  placeholder = '',
  className = '',
}: AutoResizeTextareaProps<T>) => {
  const { ref, ...rest } = register(fieldName);
  const adjustHeight = (element: HTMLTextAreaElement) => {
    element.style.height = '0';
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <textarea
      ref={(element) => {
        ref(element);
        if (element) {
          adjustHeight(element);
        }
      }}
      {...rest}
      placeholder={placeholder}
      className={`overflow-hidden resize-none outline-none ${className}`}
      onInput={(e) => adjustHeight(e.currentTarget)}
    />
  );
};

export default AutoResizeTextarea;
