export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        {children}
        &copy; Minju jo 2025
      </div>
  );
}
