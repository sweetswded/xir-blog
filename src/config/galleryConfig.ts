import type { GalleryConfig } from "@/types/config";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 支持jpg/png/webp/avif/gif格式
		// id: 相册唯一标识符（用于目录命名和URL路径）
		// cover: 手动指定封面图（可选，不填将使用第一张图片作为封面）
		// name: 相册名称
		// description: 相册描述
		// location: 相册拍摄地点
		// date: 相册日期，格式为 YYYY-MM-DD
		// tags: 相册标签
		// password: 访问密码（可选）
		// passwordHint: 密码提示（可选）
		{
			id: "chuxueying",
			name: "初雪樱",
			description: "",
			location: "",
			date: "2023-07-23",
			tags: ["Gal"],
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数
	columnWidth: 240,
};
