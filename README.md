# .net Winter Workshop 2023

冬ゼミ開催案内のWebサイトを管理するリポジトリです。

## Development

### Requirements

- Node.js v18
- Yarn v4

(おまけ) [Volta](https://volta.sh) を導入すると、package.json に記載されたバージョンの Node と Yarn が自動的にインストールされます。おすすめです。

### Commands

```sh
# Install dependencies
$ yarn install
# Launch development server
$ yarn dev
# Build for production
$ yarn build
# Launch production server
$ yarn preview
```

## Deployment

GitHubにプッシュするとGitHub Actionsにより自動的にデプロイされます。

詳細は`.github/workflows/deploy.yml`を参照してください。