import React from 'react';

/**
 * PricingToggle
 *
 * Exact Calendly-style pill toggle switching between billing periods.
 *
 * Props:
 *  value      — 'yearly' | 'monthly'  (controlled)
 *  onChange   — (value: string) => void
 *  savingsBadge — optional string shown next to yearly (e.g. "Save 20%")
 */
function PricingToggle({ value = 'yearly', onChange, savingsBadge }) {
  const options = [
    { id: 'yearly',  label: 'Billed yearly' },
    { id: 'monthly', label: 'Billed monthly' },
  ];

  return (
    <div
      className="toggle-wrapper"
      role="group"
      aria-label="Billing period"
    >
      {options.map((option) => (
        <button
          key={option.id}
          id={`toggle-${option.id}`}
          type="button"
          role="radio"
          aria-checked={value === option.id}
          className={`toggle-option${value === option.id ? ' active' : ''}`}
          onClick={() => onChange?.(option.id)}
        >
          {option.label}
          {option.id === 'yearly' && savingsBadge && (
            <span
              className="badge badge-yearly"
              style={{ marginLeft: '6px' }}
            >
              {savingsBadge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export default PricingToggle;
