import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Dropdown } from 'flowbite-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </main>
  )
}
