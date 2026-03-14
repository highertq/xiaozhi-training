// 小智AI机器人培训系统 - JavaScript

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    setupNavigation();
    setupQuestions();
    setupDemoTabs();
    setupAnimations();
}

// 设置导航点击事件
function setupNavigation() {
    const navItems = document.querySelectorAll('.category-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            showCategory(category);
        });
    });
}

// 显示分类问题
function showCategory(category) {
    const categoryData = questionsData[category];
    if (!categoryData) return;

    // 设置标题
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.innerHTML = `<i class="fas ${categoryData.icon}"></i> ${categoryData.title}`;
    }

    // 生成问题列表
    const questionsList = document.getElementById('questions-list');
    if (questionsList) {
        questionsList.innerHTML = '';
        categoryData.questions.forEach(question => {
            const questionItem = createQuestionItem(question);
            questionsList.appendChild(questionItem);
        });
    }

    // 平滑滚动到问题区域
    const questionsSection = document.getElementById('questions-container');
    if (questionsSection) {
        questionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 创建问题项
function createQuestionItem(question) {
    const item = document.createElement('div');
    item.className = 'question-item';

    const header = document.createElement('div');
    header.className = 'question-header';
    header.innerHTML = `
        <div class="question-number">${question.id}</div>
        <div class="question-text">${question.question}</div>
        <i class="fas fa-chevron-down toggle-icon"></i>
    `;

    const answer = document.createElement('div');
    answer.className = 'question-answer';
    answer.innerHTML = `
        <div class="question-answer-content">${question.answer}</div>
    `;

    item.appendChild(header);
    item.appendChild(answer);

    // 点击展开/折叠
    header.addEventListener('click', function() {
        // 关闭其他打开的问题
        document.querySelectorAll('.question-item.active').forEach(activeItem => {
            if (activeItem !== item) {
                activeItem.classList.remove('active');
            }
        });

        // 切换当前问题
        item.classList.toggle('active');
    });

    return item;
}

// 设置演示Tab
function setupDemoTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;

            // 移除所有active
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 添加active
            this.classList.add('active');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
}

// 设置动画
function setupAnimations() {
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有问题项
    document.querySelectorAll('.question-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}

// 搜索功能（可选）
function searchQuestions(keyword) {
    const items = document.querySelectorAll('.question-item');
    keyword = keyword.toLowerCase().trim();

    items.forEach(item => {
        const questionText = item.querySelector('.question-text').textContent.toLowerCase();
        const answerText = item.querySelector('.question-answer-content').textContent.toLowerCase();

        if (keyword === '' ||
            questionText.includes(keyword) ||
            answerText.includes(keyword)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // 数字键 1-7 快速跳转分类（仅在问题页面）
    if (e.key >= '1' && e.key <= '7' && window.location.pathname.includes('questions.html')) {
        const categories = ['basic', 'tech', 'hardware', 'software', 'application', 'innovation', 'defense'];
        const index = parseInt(e.key) - 1;
        showCategory(categories[index]);
    }
});

// 导出全局函数
window.showCategory = showCategory;
window.searchQuestions = searchQuestions;
