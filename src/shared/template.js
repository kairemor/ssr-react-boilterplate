// html skeleton provider
export default function template(title, initialState = {}, content = '') {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    // eslint-disable-next-line prettier/prettier
    scripts =`<script>window.__STATE__ = ${JSON.stringify(initialState)} </script>
              <script src="build/server/bundle.js"></script>`;
  } else {
    scripts = `<script src="build/client/client.js"> </script> `;
  }
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title>${title}</title>
              </head>
              <body>
              <div id="app">${content}</div>
              ${scripts}
              </body>
              </html>
              `;
  return page;
}
