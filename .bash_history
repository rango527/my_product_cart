visual studio code install
sudo dnf install code
sudo apt install ./<file>.deb
sudo apt install ./code_1.41.1-1576681836_amd64.deb
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install code # or code-insiders
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo dnf check-update
npm start
sudo apt-get update
sudo apt-get install nodejs
cd
npm start
sudo apt-get update
sudo apt-get install build-essential libssl-dev
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh
sudo apt install curl
nano install_nvm.sh
sudo apt install curl
nano install_nvm.sh
sudo apt-get install nodejs
sudo apt-get install npm
nano install_nvm.sh
bash install_nvm.sh
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh
nano install_nvm.sh
bash install_nvm.sh
source ~/.profile
nvm ls-remote
nvm install 12.14.1
nvm use 12.14.1
node -v
nvm ls
nvm alias default 12.14.1
nvm use default
npm install
npx create-react-app my-app
npm start
npm install
npm start
cd my-app
npm start
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sudo apt-get update
sudo apt-get install apache2
sudo apache2ct1 configtest
sudo apache2ctl configtest
sudo nano /etc/apache2/apache2.conf
sudo apache2ctl configtest
sudo systemctl restart apache2
sudo ufw app list
sudo ufw app info "Apache Full"
sudo ufw allow in "Apache Full"
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
nano /etc/apt/sources.list
apt-get update
apt-get upgrade
reboot
/sbin/ifconfig
/sbin/ifconfig eth0
auto lo
cd /etc
cd /network/interfaces
cd /network
cd ~
cd /etc/network/interfaces
sudo -H gedit /etc/network/interfaces
sudo /etc/init.d/networking restart
ifconfig eth0 up
sudo -H gedit /etc/network/interfaces
sudo /etc/init.d/networking restart
ifconfig eth0 up
sudo vi /etc/hosts
sudo hostname newname
or
sudo hostname newname
echo newname | sudo tee /etc/hostname
sudo vi /etc/hosts
sudo ip link set dev eth0 down
sudo dhclient eth0
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
sudo apt-get install curl
curl http://icanhazip.com
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
sudo apt-get install mysql-server
mysql_secure_installation
sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
sudo nano /etc/apache2/mods-enabled/dir.conf
sudo systemctl restart apache2
sudo systemctl status apache2
apt-cache search php- | less
apt-cache show org.example.package_name
apt-cache show package_name
apt-cache show php-cli
sudo apt-get install php-cli
sudo nano /var/www/html/info.php
sudo rm /var/www/html/info.php
sudo apt-get update
sudo apt-get install curl php-cli php-mbstring git unzip
cd ~
curl -sS https://getcomposer.org/installer -o composer-setup.php
php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php -v
git config --list
git config --add user.name "rango527"
git config --add user.email "web.mobile497373"
git config --add user.email "web.mobile497373@gmail.com"
git commit -m "readme.md"
git add .
git commit -m "readme.md"
git filter-branch -f --env-filter "
GIT_AUTHOR_NAME='rango527'
GIT_AUTHOR_EMAIL='web.mobile497373@gmail.com'
GIT_COMMITTER_NAME='rango527'
GIT_COMMITTER_EMAIL='web.mobile497373@gmail.com'
" HEAD
git remote add other https://github.com/rango527/react-product-manager.git
git remote add other https://github.com/rango527/my_product_cart.git
git push other master -f
echo "# my_product_cart" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/rango527/my_product_cart.git
git push -u origin master
git remote add origin https://github.com/rango527/my_product_cart.git
git push -u origin master
git remote add other https://github.com/rango527/my_product_cart.git
cd ~
git remote add other https://github.com/rango527/my_product_cart.git
git filter-branch -f --env-filter "
GIT_AUTHOR_NAME='rango527'
GIT_AUTHOR_EMAIL='web.mobile497373@gmail.com'
GIT_COMMITTER_NAME='rango527'
GIT_COMMITTER_EMAIL='web.mobile497373@gmail.com'
" HEAD
cd /product-cart
git filter-branch -f --env-filter "
GIT_AUTHOR_NAME='rango527'
GIT_AUTHOR_EMAIL='web.mobile497373@gmail.com'
GIT_COMMITTER_NAME='rango527'
GIT_COMMITTER_EMAIL='web.mobile497373@gmail.com'
" HEAD
git remote add other https://github.com/rango527/my_product_cart.git
git push other master -f
git clone https://github.com/shtbik/product-cart.git
git config --list
git config --add user.name "rango527"
git config --add user.name "Rango527"
git remote add other https://github.com/rango527/my_product_cart.git
sudo apt-get install php7.0-zip php-mbstring php-xml
sudo a2enmod rewrite
sudo service apache2 restart
composer global require "laravel/installer"
sudo apt install composer
nano .profile
source .profile
laravel new my-project
ssh root@SERVER_IP_ADDRESS -p PORT_NUMBER
git remote add other https://github.com/rango527/my_product_cart.git
git push other master -f
echo "# my_product_cart" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/rango527/my_product_cart.git
git push -u origin master
git remote add origin https://github.com/rango527/my_product_cart.git
git push -u origin master
git remote add other https://github.com/rango527/my_product_cart.git
cd /rango/home/product-cart
cd /home
cd /product-cart
cd /rango
cd /product_cart
git remote add other https://github.com/rango527/my_product_cart.git
git push other master -f
cd product-cart
cd /my-app
cd ~
cd /home/product-cart
cd /rango527
cd /home/rango527
ls
cd 2_git/
ls
cd..
cd ..
cd product-cart/
ls
git remote add other https://github.com/rango527/my_product_cart.git
git push other master -f
git config --list
git config --unset remote.other.url
git config --unset remote.other.fetch
git remote add other https://github.com/rango527/my_product_cart.git
git push other master -f
