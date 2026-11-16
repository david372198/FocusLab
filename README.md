
# FocusLab｜專注力學習實驗室

## 專案介紹

FocusLab 是一個以專注力、學習技巧與時間管理為主題的繁體中文教育網站。

本網站希望幫助學生了解專注力的基本概念，認識實用的學習方法，並透過圖表理解學習時間資料。

## 網站功能

- **首頁：** 介紹網站主題與各項內容。
- **認識專注力：** 說明專注力的概念與影響因素。
- **學習技巧：** 分享番茄工作法、主動回想與間隔複習。
- **時間管理：** 介紹待辦事項、目標設定與進度檢視。
- **數據視覺化：** 使用柱狀圖呈現示範學習時間。
- **關於我們：** 說明專案理念與 AI 協作規範。

## 使用技術

- HTML：建立網頁內容與結構。
- CSS：設計網站外觀與響應式版面。
- JavaScript：加入導覽頁面標示與年份更新功能。
- Markdown：撰寫專案說明與 AI 開發規範。

## 專案資料夾結構

```text
FocusLab/
├── AGENTS.md
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── pages/
    ├── focus.html
    ├── techniques.html
    ├── time-management.html
    ├── visualization.html
    └── about.html
```

## AI 開發規範

本專案使用 `AGENTS.md` 作為 AI 協作規範，定義網站目的、視覺風格、頁面結構、內容格式、檔案命名與開發注意事項。

當 AI 需要新增頁面時，可以先閱讀 `AGENTS.md`，再依照既有規範建立內容，並沿用網站的導覽列、頁尾與 CSS 樣式，維持整體一致性。

## 如何在本機預覽

1. 下載或複製本專案。
2. 使用瀏覽器開啟 `index.html`。
3. 點選導覽列即可瀏覽各個頁面。

## 部署方式

本專案可使用 GitHub Pages 發布為靜態網站。

在 GitHub Repository 的 Settings → Pages 中，選擇 `Deploy from a branch`，並設定 `main` 分支與 `/ (root)` 資料夾。

## 注意事項

數據視覺化頁面的學習時間為虛構示範資料，僅用於展示圖表，不代表真實測量結果。
