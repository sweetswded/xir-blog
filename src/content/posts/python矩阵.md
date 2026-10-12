---
title: 矩阵写法
published: 2026-10-12
description: 生成以及遍历矩阵
tags:
  - python
category: 算法
draft: True
---

## 🎯 问题描述

生成以及遍历矩阵

## ✅ 模板
        m=len(matrix)
        n=len(matrix[0])
        ans=[[0]*m for i in range(n)]
        for i,row in enumerate(matrix):
            for j,x in enumerate(row):
                ans[j][i]=x
