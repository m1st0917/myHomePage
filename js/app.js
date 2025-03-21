// 滚动动画处理
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});

// Markdown文章加载功能
window.addEventListener('DOMContentLoaded', () => {
    const loadMarkdown = async (path, containerId) => {
        try {
            const response = await fetch(path);
            const mdContent = await response.text();
            document.getElementById(containerId).innerHTML = marked.parse(mdContent);
        } catch (error) {
            console.error('加载Markdown失败:', error);
        }
    };

    // 示例：加载about.md到指定容器
    // loadMarkdown('posts/about.md', 'content-container');
});
