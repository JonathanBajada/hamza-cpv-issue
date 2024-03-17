import React from "react"
import { Metadata } from "next"
import "styles/globals.css"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"
import MedusaProvider from "./medusa-provider" // Import MedusaProvider
import { RainbowWrapper } from "@/app/rainbow-provider"
import { ChakraProvider } from '@chakra-ui/react'
// TODO: Refactor using scaffold-eth-2 for proper layout.
import useCustomTheme from './theme'; // Import useCustomTheme
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="dark">
      <body>
        <div>
          <MedusaProvider>
            <RainbowWrapper>
              <ChakraProvider>
                <main className="relative">{props.children}</main>
              </ChakraProvider>
            </RainbowWrapper>
          </MedusaProvider>
        </div>
      </body>
    </html>
  )
}
