# High School meme archive
![image](https://user-images.githubusercontent.com/36740941/131857658-910934bb-896b-4ba5-a781-3ad8154ee44b.png)

This project was built for preserving our high school shenanigans, memes and quotes.

[Demo](https://jovanblazek.github.io/memearchive/index.html)

## Features
- Responsive flex based gallery of images 🖼
- Lazy loading 😴
- Cards, dropdowns, effects 💥
- Password protection (take it as a challange 😉)
- Deployed on **Github Pages** - static site, no database or server side rendering

## Why is everything hardcoded?
The goal was to host it for free, without requiring a domain name. At the time, Github pages were perfect for this. This has meant that I could not have used a database for storing all data. 

However, content is not hardcoded per se. I wrote a script in C which generated all `img` tags for me.
