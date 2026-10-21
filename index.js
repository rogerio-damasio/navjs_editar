json
"version": 2,
"builds": [
{"src": "index.js", "use": "@vercel/node"}
1.
"routes":[
{"src": "/(.*)", "dest": "index.js")
1
}
