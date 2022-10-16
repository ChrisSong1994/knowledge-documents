import { defineConfig } from 'dumi';

  // more config: https://d.umijs.org/config
export default defineConfig({
  mode: 'site',
  title: 'Knowledge Documents',
  description: '前端知识文档',
  base: '/knowledge-documents/',
  publicPath: '/knowledge-documents/',
  favicon: './favicon.ico',
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/ChrisSong1994/knowledge-documents',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
});
