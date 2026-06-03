import React from 'react';

/**
 * Badge
 *
 * Props:
 *  variant   — 'recommended' | 'yearly' | 'success' | 'warning' | 'default'
 *  icon      — optional React node (e.g. a Lucide icon)
 *  className — extra classes
 *  children
 */
const variantMap = {
  recommended: 'badge-recommended',
  yearly:      'badge-yearly',
  success:     'badge-success',
  warning:     'badge-warning',
  default:     '',
};

function Badge({ variant = 'default', icon, className = '', children, ...rest }) {
  const variantClass = variantMap[variant] ?? '';
  const classes = ['badge', variantClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {icon && <span className="badge-icon" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
