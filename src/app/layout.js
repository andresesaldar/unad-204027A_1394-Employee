import EmployeesAppBar from '@/components/EmployeesAppBar'
import { Container, CssBaseline } from '@mui/material'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Employees app',
  description: 'Employees management next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={inter.className}>
        <EmployeesAppBar/>
        <Container sx={{my: 2}}>
          {children}
        </Container>
      </body>
    </html>
  )
}
