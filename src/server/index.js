import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../App.jsx";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(App);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
// /renderer/_default.page.server.jsx
// Environment: server


export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    <Page {...pageProps} />
  );

  const title = "Vite SSR";

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}