What's Next.js?
Next.js is a React framework support SSR (server-side rendering) 
and lots of great features like built-in routing system, CSS-in-JS, and AMP support (Accelerated Mobile Pages), etc
## How to start using Next.js?
(1). Create a folder and init the project:
mkdir your-project-name
cd your-project-name
npm init -y
git init 
(2). Create .gitignore with the following contents:
node_modules
.next
(3). Install:
npm install --save next react react-dom
(4). Open package.json and add the following scripts:
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
(5). Create ./pages/index.js with the following contents:
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
(6). Start local web server:
npm run dev

