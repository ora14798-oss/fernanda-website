"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

type ContactRequest = {
  topic: string;
  message: string;
  requestId: number;
};

type ContactRequestContextValue = {
  request: ContactRequest;
  requestContact: (topic: string, message: string) => void;
};

const ContactRequestContext = createContext<ContactRequestContextValue | null>(
  null
);

const ContactRequestProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [request, setRequest] = useState<ContactRequest>({
    topic: "general",
    message: "",
    requestId: 0,
  });

  const requestContact = useCallback((topic: string, message: string) => {
    setRequest((prev) => ({ topic, message, requestId: prev.requestId + 1 }));
    requestAnimationFrame(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <ContactRequestContext.Provider value={{ request, requestContact }}>
      {children}
    </ContactRequestContext.Provider>
  );
};

const useContactRequest = () => {
  const ctx = useContext(ContactRequestContext);
  if (!ctx) {
    throw new Error(
      "useContactRequest must be used within a ContactRequestProvider"
    );
  }
  return ctx;
};

export { ContactRequestProvider, useContactRequest };
