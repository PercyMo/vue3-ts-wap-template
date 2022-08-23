module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  // plugins: ['stylelint-scss'],
  rules: {
    'selector-class-pattern': null,
    // scss 在校验时对部分关键字不识别会报错，没看到有好的解决方案，暂时屏蔽掉该条规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
};
