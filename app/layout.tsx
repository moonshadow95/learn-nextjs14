import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Next",
    default: "Loading..."
  },
  description: 'The best framework',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <Navigation/>
    {children}
    </body>
    </html>
  )
}
