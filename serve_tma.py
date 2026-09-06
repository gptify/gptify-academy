"""
=============================================================================
GPTIFY UZBEKISTAN — TELEGRAM MINI APP LOCAL DEV SERVER
=============================================================================
Runs on http://localhost:8080
Serves the `tma/` web directory with proper UTF-8 and MIME types.
Can be exposed to Telegram using Cloudflare Tunnel, ngrok or localtunnel:
  ngrok http 8080
  cloudflared tunnel --url http://localhost:8080
=============================================================================
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

PORT = 8080
DIRECTORY = Path(__file__).resolve().parent

class TMAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        # Allow cross-origin and prevent aggressive caching in Telegram WebApp
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        mime_type = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        elif path.endswith('.html'):
            return 'text/html; charset=utf-8'
        elif path.endswith('.css'):
            return 'text/css; charset=utf-8'
        return mime_type

def run_server():
    print("=" * 65)
    print("⚡ GPTify Uzbekistan — Gamified AI Learning Mini App Server")
    print("=" * 65)
    print(f"📁 Web Directory: {DIRECTORY}")
    print(f"🌐 Local URL:     http://localhost:{PORT}")
    print("📱 Telegram Test: Run ngrok or cloudflared to get https:// URL")
    print("=" * 65)

    with socketserver.TCPServer(("", PORT), TMAHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server to'xtatildi.")
            httpd.shutdown()

if __name__ == "__main__":
    run_server()
