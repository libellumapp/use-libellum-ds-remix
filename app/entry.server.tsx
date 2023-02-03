import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import { getCssText } from "@libellum-ds/react";
import globalStyles from './styles/global'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(/<\/head>/, `
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap" rel="stylesheet"></link>
      <style id="global">${globalStyles()}</style>
      <style id="stitches">${getCssText()}</style>
    </head>`);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
