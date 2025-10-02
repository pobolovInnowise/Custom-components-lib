
import type { StorybookConfig } from '@storybook/react-webpack5';
import type { RuleSetRule } from 'webpack';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs'],
  framework: { name: '@storybook/react-webpack5', options: {} },
  webpackFinal: async (config) => {
    if (!config?.module?.rules) return config;

    // Type guard: оставляем только объекты RuleSetRule
    const rules: RuleSetRule[] = config.module.rules.filter(
        (rule): rule is RuleSetRule => !!rule && typeof rule === 'object' && 'test' in rule
    );

    // Очищаем старые правила для CSS, чтобы не было конфликта
    config.module.rules = rules.filter(
        (rule) => !(rule.test instanceof RegExp && rule.test.test('.css'))
    );

    // Добавляем CSS Modules
    config.module.rules.push({
      test: /\.module\.css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    // Добавляем глобальный CSS
    config.module.rules.push({
      test: /\.css$/i,
      exclude: /\.module\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};

export default config;
