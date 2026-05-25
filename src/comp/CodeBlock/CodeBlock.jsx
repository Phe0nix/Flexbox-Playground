import cb from './cb.module.scss';
import { useState } from 'react';

export default function CodeBlock({children, cssOutput}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!cssOutput || !navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className={cb.codeblock}>
      {children}

      {cssOutput && (
        <div className={cb.cssOutput}>
          <div className={cb.cssOutput_header}>
            <span>Live CSS</span>
            <button type="button" onClick={handleCopy} className={cb.copyButton}>
              {copied ? 'Copied' : 'Copy CSS'}
            </button>
          </div>
          <pre className={cb.cssOutput_block}>{cssOutput}</pre>
        </div>
      )}
    </div>
  )
}