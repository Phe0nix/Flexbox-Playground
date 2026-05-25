import { useEffect, useRef, useState } from 'react';

export default function useUrlState(key, defaultValue, options = {}) {
  const parse = options.parse || ((value) => value);
  const serialize = options.serialize || ((value) => String(value));
  const hash = options.hash;
  const shouldSyncHash = useRef(false);

  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    const params = new URLSearchParams(window.location.search);
    const raw = params.get(key);

    if (raw === null) {
      return defaultValue;
    }

    try {
      return parse(raw);
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const url = new URL(window.location.href);
    const isDefault = String(value) === String(defaultValue);

    if (isDefault) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, serialize(value));
    }

    if (hash && shouldSyncHash.current) {
      url.hash = hash;
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, '', nextUrl);
  }, [defaultValue, hash, key, serialize, value]);

  const setUrlState = (nextValue) => {
    shouldSyncHash.current = true;
    setValue(nextValue);
  };

  return [value, setUrlState];
}
