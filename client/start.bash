#git clean -f && git reset --hard
git pull
npm i && npm run-script build
pm2 start ecosystem.config.js --env production --only pinglish:3000
