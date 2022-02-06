module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
        },
      },
    ],
    ["module:react-native-dotenv", {
      "moduleName": "react-native-dotenv",
    }]
  ],
};
