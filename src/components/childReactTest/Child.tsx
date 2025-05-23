// components/ChildButton.tsx
"use client";

import React from "react";

// ✅ Tambahin tipe props-nya
type Props = {
  onClick: () => void;
};

const ChildButton = React.memo(({ onClick }: Props) => {
  console.log("🧒 ChildButton render");
  return <button onClick={onClick}>Klik Anak</button>;
});

// (opsional) buat ilangin warning display-name
ChildButton.displayName = "ChildButton";

export default ChildButton;
