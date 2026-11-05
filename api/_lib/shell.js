const { FALLBACK_SHELL } = require('./render');

// The shell is the untouched build of public/index.html (see prerender.js).
let cachedShell = null;

async function loadShell(req) {
  if (cachedShell) return cachedShell;
  try {
    const proto = req.headers['x-forwarded-proto'] || 'https';
    const response = await fetch(`${proto}://${req.headers.host}/app-shell.html`);
    if (!response.ok) throw new Error(`status ${response.status}`);
    cachedShell = await response.text();
    return cachedShell;
  } catch (err) {
    console.error('Could not load app-shell.html:', err);
    return FALLBACK_SHELL;
  }
}

module.exports = { loadShell };
