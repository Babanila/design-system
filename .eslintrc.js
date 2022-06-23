module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `baba-eslint-config`
  extends: ["baba-eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
