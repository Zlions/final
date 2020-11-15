import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/login',
      component: '../pages/Login',
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/company', component: '../pages/Company' },
        {
          path: '/job_list',
          component: '../pages/JobList',
        },
        { path: '/job_list/:id', component: '../pages/JobListItem' },
        {
          path: '/company/:id',
          component: '../pages/CompanyItem',
          routes: [
            { path: '/company/:id/', component: '../pages/CompanySummarize' },
            { path: '/company/:id/position', component: '../pages/CompanyPosition' },
          ],
        },
      ],
    },
  ],
  sass: {},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'client',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

export default config;
