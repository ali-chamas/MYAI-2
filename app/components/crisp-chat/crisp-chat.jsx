"use client";

import React , { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("afba8b91-8fd0-4fa4-b809-19ac23dd21c0");
  }, []);

  return null;
};