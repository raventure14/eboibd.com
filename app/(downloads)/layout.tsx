import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download | eboibd.com",
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="h-auto">  {children}</div>
  );
}
