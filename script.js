// 配置漫画章节
const comicData = {
  title: "海贼王 第1话",
  pages: [
    "https://cdn.jsdelivr.net/gh/Flyc009-tech/Flyc009-tech.github.io/images/0.jpg",
    "https://cdn.jsdelivr.net/gh/Flyc009-tech/Flyc009-tech.github.io/images/1.jpg",
    "https://cdn.jsdelivr.net/gh/Flyc009-tech/Flyc009-tech.github.io/images/2.jpg",
    // 添加更多页面...
  ]
};

// 动态生成图片
const container = document.getElementById("comicContainer");
document.title = comicData.title;

comicData.pages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "海贼王漫画";
  img.className = "comic-page";
  img.loading = "lazy"; // 懒加载
  container.appendChild(img);
});