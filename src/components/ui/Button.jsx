import React, { useRef, useEffect } from 'react';

/**
 * Button
 *
 * Props:
 *  variant  — 'primary' | 'secondary' | 'ghost-dark' | 'white' | 'link'
 *  size     — 'sm' | 'md' | 'lg'
 *  as       — element type to render ('button' | 'a' | any React component)
 *  className — extra classes
 *  children
 *  ...rest  — forwarded to the root element
 */
const variantMap = {
  primary:    'btn-primary',
  secondary:  'btn-secondary',
  'ghost-dark': 'btn-ghost-dark',
  white:      'btn-white',
  link:       'btn-link',
};

const sizeMap = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

const Button = React.forwardRef(function Button(
  {
    variant   = 'primary',
    size      = 'md',
    as: Tag   = 'button',
    className = '',
    children,
    disabled  = false,
    ...rest
  },
  ref
) {
  const internalRef = useRef(null);
  
  // Merge external ref with internal ref
  const setRef = (element) => {
    internalRef.current = element;
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  const variantClass = variantMap[variant] ?? variantMap.primary;
  const sizeClass    = variantMap[variant] === 'btn-link' ? '' : (sizeMap[size] ?? sizeMap.md);

  const classes = ['btn', variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  // Magnetic effect logic for primary buttons
  useEffect(() => {
    const el = internalRef.current;
    if (!el || variant !== 'primary') return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Max ±8px X, ±4px Y
      const xMove = (x / (rect.width / 2)) * 8;
      const yMove = (y / (rect.height / 2)) * 4;

      el.style.transform = `translate(${xMove}px, ${yMove}px)`;
      el.style.transition = 'transform 0.1s ease';
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
      el.style.transition = 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [variant]);

  return (
    <Tag
      ref={setRef}
      className={classes}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
});

Button.displayName = 'Button';

export default Button;
