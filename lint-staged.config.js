module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.vue': [
    'eslint --fix --max-warnings=0',
    'prettier --write',
    'stylelint --fix',
  ],
  '*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
