#!/bin/sh

echo "Installing web server and databases..."
sudo apt install apache2 composer mariadb-server-10.3 mongodb php7.4 php7.4-gd php7.4-mysql
npm install && cd backend && npm install && cd ..
git submodule init && git submodule update
cd Captcheck && composer install && cd ..
echo "Configuring web server and databases..."

# Don't set 'root password', but accept other defaults.
printf '\nn\n\n\n\n\n' | sudo mysql_secure_installation

# Initialize CAPTCHA database.
sudo mariadb < Captcheck/database.sql
sudo mariadb -e "CREATE USER IF NOT EXISTS 'huskyreview'@'localhost' IDENTIFIED BY 'huskyreview';"
sudo mariadb -e "GRANT ALL ON captcheck.* TO 'huskyreview'@'localhost';"

# Deploy to web-accessible location.
sudo cp -r Captcheck /var/www/
sudo cp settings.php /var/www/Captcheck/

# Disable boilerplate welcome page.
sudo cp huskyreview.conf /etc/apache2/sites-available/
sudo a2dissite 000-default.conf && sudo a2ensite huskyreview.conf

# Enable transparent redirection to port 8080.
sudo a2enmod proxy_http && sudo systemctl restart apache2
