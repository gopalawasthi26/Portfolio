const { exec, spawn } = require('child_process')
const os = require('os')

// Start Next.js dev server
const next = spawn('npx', ['next', 'dev', '-p', '3000'], {
  stdio: 'inherit',
  shell: true
})

// Wait 4 seconds then open browser
setTimeout(() => {
  const url = 'http://localhost:3000'
  const platform = os.platform()
  
  if (platform === 'win32') {
    exec(`start ${url}`)
  } else if (platform === 'darwin') {
    exec(`open ${url}`)
  } else {
    exec(`xdg-open ${url}`)
  }
  
  console.log(`\n🚀 Opening ${url} in your browser...\n`)
}, 4000)

next.on('close', (code) => process.exit(code))
