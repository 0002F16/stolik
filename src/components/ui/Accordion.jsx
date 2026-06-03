import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Accordion
 *
 * FAQ-style accordion with smooth height animation and chevron rotation.
 *
 * Props:
 *  items — Array<{ id: string, question: string, answer: string | ReactNode }>
 *  allowMultiple — boolean (default false — closes others when one opens)
 *  defaultOpen — string | string[] — id(s) open by default
 *  className — extra classes on the wrapper
 */

function AccordionItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  // Smooth height animation via max-height trick
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px';
    } else {
      el.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button
        id={`accordion-trigger-${item.id}`}
        type="button"
        className={`accordion-trigger${isOpen ? ' open' : ''}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${item.id}`}
        onClick={() => onToggle(item.id)}
      >
        <span>{item.question}</span>
        <ChevronDown
          className="chevron"
          width={20}
          height={20}
          aria-hidden="true"
        />
      </button>

      <div
        ref={bodyRef}
        id={`accordion-body-${item.id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${item.id}`}
        className={`accordion-body${isOpen ? ' open' : ''}`}
        style={{ maxHeight: 0 }}
      >
        <div className="accordion-body-inner">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

function Accordion({
  items           = [],
  allowMultiple   = false,
  defaultOpen     = [],
  className       = '',
}) {
  const initialOpen = Array.isArray(defaultOpen)
    ? defaultOpen
    : [defaultOpen].filter(Boolean);

  const [openIds, setOpenIds] = useState(new Set(initialOpen));

  function handleToggle(id) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={className} role="list">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default Accordion;
