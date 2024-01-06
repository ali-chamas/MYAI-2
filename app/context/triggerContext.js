'use client'
import { createContext, useState } from 'react';

export const TriggerContext = createContext();

export function TriggerProvider({children}) {
  const [apiLimitContext, setApiLimitContext] = useState(false);

  return (
    <TriggerContext.Provider value={{ apiLimitContext,setApiLimitContext }}>
      {children}
    </TriggerContext.Provider>
  );
}