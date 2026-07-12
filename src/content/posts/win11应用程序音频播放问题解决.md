---
title: Win11 老应用程序音频爆音/杂音问题解决
published: 2026-07-09
description: 老应用通过 DirectShow 播放视频时音频爆音、杂音？教你一招彻底解决 MP2 音频解码问题
tags:
  - Win11
  - Win10
  - 音频播放
  - DirectShow
  - 实用工具
category: 实用工具
draft: false
---

## 🎯 问题描述

一些老应用程序（如老旧的教育软件、游戏、媒体播放器等）使用 **DirectShow** 播放 MPEG-1 格式的视频时，**音频轨道为 MP2（MPEG-1 Layer II）格式**，播放会出现以下症状：

- **音频爆音**（像放鞭炮一样的"噼啪"声）
- **杂音/电流声**
- **音频完全损坏或无声**
- **视频正常但音频异常**

## 🧠 根本原因

Windows 10 / Windows 11 自带的 **DirectShow MPEG-1 解码器**（`quartz.dll` 中的 MPEG-1 Splitter 和 Decoder）已经**功能残废**——微软砍掉了对 MP2 音频解码的支持，导致通过 DirectShow 管道播放 MP2 音频时输出损坏的音频流。

> 这并非硬件问题，也不是应用本身的问题，而是**操作系统解码器退化**造成的兼容性问题。

## ✅ 解决方案

### 安装 LAV Filters

[LAV Filters](https://github.com/Nevcairiel/LAVFilters) 是一套开源的 DirectShow 解码滤镜，完美替代系统自带的残废解码器。

#### 步骤

1. **下载 LAV Filters**
   - 前往 [LAV Filters GitHub Releases](https://github.com/Nevcairiel/LAVFilters/releases) 页面
   - 下载最新版本的安装包（如 `LAVFilters-0.79.2-Installer.exe`）

2. **安装**
   - 以**管理员身份**运行安装程序
   - 一路默认选项安装即可
   - 安装程序会自动注册所有需要的 DirectShow 滤镜

3. **验证安装**
   - 安装完成后，系统会注册以下关键滤镜：
     - `LAV Splitter` — 负责拆分 MPEG-2/MPEG-1 容器
     - `LAV Audio Decoder` — 负责解码 MP2、AAC、AC3 等音频格式
     - `LAV Video Decoder` — 负责解码 MPEG-2、H.264 等视频格式

4. **重启应用**
   - 重新打开之前有问题的应用程序
   - 此时应用通过 DirectShow 播放视频时，会自动优先使用 LAV Filters 而非系统解码器
## 📝 注意事项

- **不是所有应用都受影响**：仅影响依赖 DirectShow MPEG-1 Splitter 的老应用。使用现代播放器（如 VLC、mpv、PotPlayer）的应用不受影响，因为它们自带解码器。
- **安装后无需配置**：LAV Filters 默认配置即可工作，开箱即用。
- **64位 vs 32位**：如果你的老应用是 32 位的，需确保安装 LAV Filters 时勾选了 32 位版本（默认全选）。

## 🔗 相关链接

 [LAV Filters GitHub](https://github.com/Nevcairiel/LAVFilters)

