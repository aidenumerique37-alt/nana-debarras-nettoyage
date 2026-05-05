import http.server, os

PORT = int(os.environ.get('PORT', 8000))
DIR  = os.path.dirname(os.path.abspath(__file__))

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=DIR, **kw)
    def log_message(self, fmt, *args):
        pass

with http.server.HTTPServer(('', PORT), H) as s:
    s.serve_forever()
