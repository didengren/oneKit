({
    appDir: '../src/js',          /* 应用程序的目录即<ROOT> */
    baseUrl: './',      /* 相对于appDir, 代表查找文件的锚点 */
    dir: '../dist/js',      /* 输出目录 */
    modules: [
        {
            name: 'overlay'
        }
    ],
	fileExclusionRegExp: /^(r|build|example\.build)\.js$/,    /* 任何于此规则匹配的文件或文件夹都不会复制到输出目录 */
    optimizeCss: 'standard',                                  /* CSS优化设置 */
	removeCombined: true                                      /* 如果true，优化器将从输出目录中删除合并的文件 */
})