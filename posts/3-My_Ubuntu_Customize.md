---
title: "My Ubuntu Customize"
author: "Lokesh Reddy"
date: "2020-07-10"
hero_image: ../static/ubuntu.png
---

Full list of my aweswome customize for ubuntu

## Tweaks Tool Install

```bash
sudo add-apt-repository universe
sudo apt install gnome-tweak-tool
```

## Shell

shell is locked by default in Ubuntu , Here is how to unlock it.

```bash
sudo apt install gnome-shell-extensions
sudo apt-get install chrome-gnome-shell ## for chrome
```

## Extensions

```bash
# Night Mode
https://extensions.gnome.org/extension/1276/night-light-slider/

# Internet Speed Monitor
https://extensions.gnome.org/extension/1085/simple-net-speed/

# Birthdays Notify
https://extensions.gnome.org/extension/687/birthdays_notify/

# usage gedit  ~/.local/share/gnome-shell/extensions/birthdays_notify@kryta/birthdays add date here!!
```

## Installing Theme and Icons

Orchis and Orchis-Dark:

```bash
git clone https://github.com/vinceliuice/Orchis-theme
cd Orchis-theme
./install.sh
```

Numix-Circle :

```bash
sudo add-apt-repository ppa:numix/ppa
sudo apt update
sudo apt install numix-icon-theme-circle
```

## Setting in Tweaks

```bash
    Application : Orchis-dark
    Cursor      : DMZ-White
    Icons       : Numix-Circle
    Image       :
```

## Apps

1. Cozy
2. Planner

```bash
# install flathub https://flatpak.org/setup/Ubuntu/
https://flathub.org/apps/details/com.github.geigi.cozy
# https://flathub.org/apps/details/io.github.hakuneko.HakuNeko

```

3. Vlc
4. Vscode
5. Git
