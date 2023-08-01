// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(".");

// module.exports = {
//   /* general options */

//   resolver: {
//     extraNodeModules: {
//       "@app": path.resolve(__dirname, "src/app"),
//       "@processes": path.resolve(__dirname, "src/processes"),
//       "@pages": path.resolve(__dirname, "src/pages"),
//       "@widgets": path.resolve(__dirname, "src/widgets"),
//       "@features": path.resolve(__dirname, "src/features"),
//       "@entities": path.resolve(__dirname, "src/entities"),
//       "@shared": path.resolve(__dirname, "src/shared"),
//     },
//   },
//   transformer: {
//     /* transformer options */
//   },
//   serializer: {
//     /* serializer options */
//   },
//   server: {
//     /* server options */
//   },
//   watcher: {
//     /* watcher options */
//     watchman: {
//       /* Watchman-specific options */
//     },
//   },
// };

module.exports = config;
