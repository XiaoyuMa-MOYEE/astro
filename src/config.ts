import type {
	AnalyticsConfig,
	CommentConfig,
	DeployConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	// 浏览器标题、导航栏左侧名称，以及 SEO 标题的站点名部分。
	title: "MOYEE",
	// 首页副标题；页面没有单独 description 时，也会作为默认 SEO 描述。
	subtitle: "Personal Site",

	// 默认语言使用下划线格式（如 zh_CN）；生成路由时会自动转换为 zh-CN。
	// 默认语言不会带语言前缀：中文首页为 `/`，中文文章为 `/posts/.../`。
	lang: "zh_CN",
	// 启用中英文切换。数组顺序同时决定语言选择器中的排列顺序。
	// 非默认语言会带语言前缀，因此英文首页为 `/en/`。
	// 若以后只保留单语言，可将此项改为 `[]` 隐藏语言切换器。
	supportedLangs: ["zh_CN", "en"],

	theme: {
		// 主题色相，范围 0–360。例如：红 0、绿蓝 200、蓝青 250、粉 345。
		hue: 75,
		// 首次访问时的默认配色；访客手动选择后会优先使用浏览器本地设置。
		mode: "light",
	},
	banner: {
		// 是否显示页面顶部的大幅横幅。
		enable: true,
		// 不以 `/` 开头时相对于 `src/`；以 `/` 开头时相对于 `public/`。
		// 例如 `assets/images/banner.jpg` 对应 `src/assets/images/banner.jpg`。
		src: "assets/images/demo-banner.jpg",
		// 控制横幅裁切时保留顶部、中央或底部区域。
		position: "center",
		credit: {
			// 是否在横幅右下方显示图片作者/来源。
			enable: true,
			text: "畑乃おいも / Hatano Oimo",
			// 可选；填写后署名可点击跳转到原作者或图片来源。
			url: "https://www.pixiv.net/en/artworks/124171254",
		},
	},
	toc: {
		// 是否在宽屏文章页右侧显示目录。
		enable: true,
		// 目录收录的最大标题层级，只允许 1、2 或 3。
		depth: 2,
	},
	favicon: [
		// 留空时使用 `public/favicon/` 中的模板图标。
		// 自定义图标应放在 `public/`，并使用以 `/` 开头的路径。
		// {
		//   src: "/favicon/icon.svg",
		//   theme: "light", // 可选：只在亮色或暗色系统主题下使用。
		//   sizes: "32x32", // 可选：同一路径存在多个尺寸时填写。
		// }
	],
	ogImage: {
		// 启用默认 Open Graph 图片，用于社交平台分享预览。
		useDefault: true,
		// OG 图片建议放在 public 目录中，并使用以 `/` 开头的绝对站内路径。
		defaultSrc: "/media/images/banner.jpg",
	},
};

export const navBarConfig: NavBarConfig = {
	// LinkPreset 会自动使用当前语言显示“主页、归档、工具、关于、友链”。
	// 自定义内部链接不要手动拼接部署 base path；模板会自动处理。
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Tools,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/XiaoyuMa-MOYEE",
			// 外部链接会显示外链图标，并在新标签页中打开。
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	// 路径规则与 banner.src 相同：普通路径相对于 src，以 `/` 开头则相对于 public。
	avatar: "assets/images/moyee-avatar.png",
	name: "MOYEE",
	bio: "兴趣使然 永远好奇 猫猫教万岁",
	// 个人资料卡片底部的社交链接。
	links: [
		{
			name: "X",
			// 图标代码可在 https://icones.js.org/ 查询。
			// 若使用新的图标集合，需要安装 `@iconify-json/<图标集合名>`。
			icon: "fa6-brands:x-twitter",
			url: "https://x.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/XiaoyuMa-MOYEE",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	// 是否在每篇文章底部显示版权许可信息。
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 代码块主题。当前模板覆盖了部分背景样式，因此这里应选择深色主题。
	// 更细的代码块样式在 `astro.config.mjs` 的 expressiveCode 配置中。
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	// 评论由 Giscus 提供。请前往 https://giscus.app/ 为自己的公开仓库生成配置。
	// 上线前必须替换 repo、repoId、category 和 categoryId，避免评论写入模板仓库。
	giscus: {
		repo: "iyanarmanda/fumika",
		repoId: "R_kgDOTQYphQ",
		// 若不希望访客直接在 GitHub Discussions 创建新讨论，可选择 Announcements 分类。
		category: "General",
		categoryId: "DIC_kwDOTQYphc4DBG8B",
		// 以页面路径作为讨论映射键；部署后不要随意修改文章 URL。
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "1",
		inputPosition: "top",
		theme: "reactive",
		// Giscus 的回退界面语言；正常情况下组件会跟随当前中/英文页面自动切换。
		lang: "zh-CN",
		loading: "lazy",
	},
};

export const analyticsConfig: AnalyticsConfig = {
	// 当前只支持 Google Analytics 4。保持 false 时不会加载统计脚本。
	enabled: false,
	// 使用 GA4 时取消下面的注释，并将 enabled 改为 true。
	// google: {
	//   id: "G-XXXXXXXXXX",
	// },
};

export const deployConfig: DeployConfig = {
	// 正式站点完整域名，用于 canonical、RSS、站点地图和分享链接。
	// 上线前务必替换，不要保留演示域名。
	siteUrl: "https://astro.moyee-cat.workers.dev",
	// 部署在域名根目录时使用 `/`；GitHub Pages 项目站通常使用 `/仓库名/`。
	baseUrl: "/",
};
