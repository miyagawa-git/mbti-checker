# 画像配置ガイド

## 必要な画像ファイル

以下の16種類のMBTIタイプの画像を `public/results/` ディレクトリに配置してください。

### ファイル名一覧

```
public/results/ENTJ.png
public/results/ENTP.png
public/results/ENFJ.png
public/results/ENFP.png
public/results/ESTJ.png
public/results/ESTP.png
public/results/ESFJ.png
public/results/ESFP.png
public/results/INTJ.png
public/results/INTP.png
public/results/INFJ.png
public/results/INFP.png
public/results/ISTJ.png
public/results/ISTP.png
public/results/ISFJ.png
public/results/ISFP.png
```

### 推奨画像仕様

- **サイズ**: 500x500px 以上（正方形推奨）
- **フォーマット**: PNG（透過背景推奨）
- **容量**: 各ファイル 500KB以下推奨

## ロゴ画像

トップページのロゴ画像は以下に配置してください：

```
public/logo.png
```

推奨サイズ: 500x500px（透過背景推奨）

## 画像の表示効果

結果画面では、各画像の周りに以下の効果が自動的に適用されます：

- 白色から透明へのグラデーション（2層）
- フローティングアニメーション
- ドロップシャドウ
- レスポンシブ対応（モバイル: 250px、デスクトップ: 350px）

配置後、開発サーバーを再起動してください：

```bash
npm run dev
```
