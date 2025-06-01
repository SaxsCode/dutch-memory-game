# Ik ga op reis en ik neem mee...

A web version of the classic Dutch memory game “Ik ga op reis en ik neem mee...” (“I’m going on a trip and I’m bringing...”), built with PHP, JavaScript, and modern CSS.

## 📦 Features

- Two-player turn-based gameplay
- Modern, responsive design
- Keyboard (Enter) and mouse support
- Clear turn indicator and score display
- Option to restart when the game is over

## 🚀 Installation

1. **Clone this repository:**

```
git clone https://github.com/saxscode/dutch-memory-game.git
cd dutch-memory-game
```

2. **Place the files in your web server’s root directory**  
For example, `/srv/http/` for Apache on Arch Linux.

3. **Make sure PHP and a web server are installed:**

```
sudo pacman -S apache php php-apache
```

4. **Start Apache:**

```
sudo systemctl start httpd
```

5. **Open the app in your browser:**

```
http://localhost/
```

## 🕹️ How to Play

1. Enter both player names and click **Begin**.
2. Players take turns repeating and extending the list.
3. Type the correct sequence and add a new item.
4. The first player to make a mistake loses!

## 🎨 Screenshots

![Start screen](screenshots/screen1.png)
![Game screen](screenshots/screen1.png)

## 📄 License

MIT License. Free to use and modify!

---

**Have fun playing!**  
Questions or suggestions? Open an issue or submit a pull request!
