import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>Header do Blog</header>
      {children}
    </div>
  );
}
