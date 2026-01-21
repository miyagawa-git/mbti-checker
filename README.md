# MBTI風性格診断アプリ

4つの質問であなたの性格タイプを診断するWebアプリケーションです。

## 特徴

- 🎨 先進的でアニメーション付きのUIデザイン
- ⚡ Next.js 15 + React 19 + TypeScript
- 🎭 Material-UI による美しいコンポーネント
- 📱 レスポンシブデザイン対応
- 🚀 フロントエンドのみ（バックエンド・DB不要）

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **UIライブラリ**: Material-UI (MUI) v6
- **スタイリング**: Emotion
- **アニメーション**: Material-UI Transitions

## 診断の仕組み

4問の質問で4つの軸を診断します：

1. **E/I軸**: 外向型(Extraversion) vs 内向型(Introversion)
2. **S/N軸**: 感覚型(Sensing) vs 直観型(iNtuition)
3. **T/F軸**: 思考型(Thinking) vs 感情型(Feeling)
4. **J/P軸**: 判断型(Judging) vs 知覚型(Perceiving)

全16タイプ（ENTJ、ENFP、ISTJ など）の診断結果を提供します。

## セットアップ

### 依存パッケージのインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを確認できます。

### プロダクションビルド

```bash
npm run build
npm start
```

## プロジェクト構造

```
mbti-checker/
├── app/
│   ├── components/
│   │   ├── QuestionScreen.tsx  # 質問画面コンポーネント
│   │   └── ResultScreen.tsx    # 結果画面コンポーネント
│   ├── layout.tsx               # ルートレイアウト
│   ├── page.tsx                 # ホームページ
│   └── theme.ts                 # Material-UIテーマ設定
├── data/
│   ├── questions.ts             # 質問データ
│   └── results.ts               # 診断結果データ
├── types/
│   └── index.ts                 # TypeScript型定義
└── package.json
```

## ライセンス

MIT
