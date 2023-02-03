import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useCookies } from "react-cookie";

import { Button, darkMode, lightMode, styled } from "@libellum-ds/react";

type Theme = 'light' | 'dark'
type ThemeCookie = {theme: Theme}

const Body = styled('body', { 
  backgroundColor: '$$bgColor',
})

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {

  const [cookies, setCookie] = useCookies<'theme', ThemeCookie>()
  const [theme, setTheme] = useState<Theme>('light')
  const currentTheme = theme === 'dark' ? darkMode : lightMode
  const currentBgColor = currentTheme.colors["color-background"].value

  useEffect(() => {
    setTheme(cookies.theme || 'light')
  }, [cookies.theme])

  const handleToggleTheme = () => {
    setTheme(state => {
      const newTheme = state === 'light' ? 'dark' : 'light'
      setCookie('theme', newTheme)
      return newTheme
    })
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <Body className={currentTheme} style={{ backgroundColor: currentBgColor }}>

        <Button onClick={handleToggleTheme}>{theme.toUpperCase()} </Button>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Body>
    </html>
  );
}
