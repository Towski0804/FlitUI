# rm -rf dist
# bun install
# bun run build

tar -czvf dist.tar.gz dist 

scp ./dist.tar.gz gududuHK:/root/www/flitui/ &&
rm -rf dist.tar.gz &&

ssh gududuHK sudo rm -rf /root/www/flitui/dist &&
ssh gududuHK tar -xzvf /root/www/flitui/dist.tar.gz -C /root/www/flitui && 
ssh gududuHK sudo rm -rf /root/www/flitui/dist.tar.gz