#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8765}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if lsof -t -i ":$PORT" >/dev/null 2>&1; then
  echo "Stopping existing server on port $PORT..."
  kill "$(lsof -t -i ":$PORT")" 2>/dev/null || true
  sleep 0.3
fi

cd "$ROOT"
echo "Starting preview server at http://localhost:$PORT/"
exec python3 -m http.server "$PORT"
