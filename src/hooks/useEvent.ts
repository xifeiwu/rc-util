import * as React from 'react';

export default function useEvent<T extends Function>(callback: T): T {
  const fnRef = React.useRef<any>();
  fnRef.current = callback;

  // @ts-ignore
  const memoFn = React.useCallback<T>(
    ((...args: any) => fnRef.current?.(...args)) as any,
    [],
  );

  return memoFn;
}
