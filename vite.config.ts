import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: (() => {
    // 如果在 GitHub Actions 中运行，使用仓库名作为 base
    if (process.env.GITHUB_REPOSITORY) {
      const repoName = process.env.GITHUB_REPOSITORY.split("/")[1]
      // 如果是 username.github.io 格式，使用根路径
      if (repoName.endsWith(".github.io")) {
        return "/"
      }
      // 否则使用仓库名作为子路径
      return `/${repoName}/`
    }
    // 本地开发时使用根路径
    return "/"
  })(),
})
