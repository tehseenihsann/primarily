import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ className, children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-6 py-2 rounded-full font-medium transition ',
        variant === 'primary' ? 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-900 cursor-pointer' : 'bg-gray-200 text-black',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
