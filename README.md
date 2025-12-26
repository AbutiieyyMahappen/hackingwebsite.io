**bots commands change termux**

**run bot**

*node index.js

**REMEMBER THIS RULE (IMPORTANT)**

**GitHub → Termux:** git pull

**Termux → GitHub**: git add . && git commit -m "msg" && git push

**Edit code in Termux
Copy code**
**Bash**

*nano index.js


**run bot**

*cd ~/Mahappen-bot
node index.js

**install node.js**

*pkg install nodejs-lts -y

**install whiskey**

*npm install @whiskeysockets/baileys pino qrcode-terminal




🔁 Termux ↔ GitHub Basics
🟢 Termux → GitHub (Upload your code)
Use this when you change code locally and want it online.
Copy code
Bash
git status
git add .
git commit -m "Update bot code"
git push
✅ This sends your Termux code to GitHub



GitHub → Termux (Download updates)
Use this when you edit files on GitHub and want them in Termux.
Copy code
Bash
**git pull**
✅ This updates your local files from GitHub




WhatsApp Auth Folder (IMPORTANT)
📁 auth folder
Contains WhatsApp login session
DO NOT upload to GitHub
Add this to .gitignore:
Copy code

**auth/
node_modules/**
If QR doesn’t show:
Copy code
Bash
**rm -rf auth
node index.js**


📦 Installing Dependencies
After cloning a repo:
Copy code
Bash
**npm install**
If a module error appears:
Copy code
Bash
**npm install @whiskeysockets/baileys pino qrcode-terminal**

