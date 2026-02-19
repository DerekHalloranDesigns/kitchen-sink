const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./deploy/config.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlFileRegex = new RegExp("(src/pages/|src\\\\pages\\\\)", "ig");
let directories = config.entryPoints.pages.directory;

let htmlFiles = [];
let entryPoints = {};

while (directories.length > 0) {
  let directory = directories.pop();
  let dirContents = fs
    .readdirSync(directory)
    .map((file) => path.join(directory, file));

  htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")));
  directories.push(
    ...dirContents.filter((file) => fs.statSync(file).isDirectory()),
  );
}

htmlFiles.map((file) => {
  // Normalize backslashes → forward slashes so chunk names match on Windows + CI (Linux)
  let name = file
    .replace(htmlFileRegex, "")
    .replace(".html", "")
    .replace(/\\/g, "/");
  entryPoints[name] = path.resolve(__dirname, file.replace(".html", ".tsx"));
});

module.exports = (env) => {
  const environment = env.env;
  const target = config.targets[environment];
  const outputPath = target.outputPath;
  const publicPath = target.publicPath;
  const assetModuleFilename = target.assetModuleFilename;

  const clean = environment === "dev" ? true : false;

  return {
    mode: environment === "dev" ? "development" : "production",
    stats: {
      loggingDebug: ["sass-loader"],
    },
    entry: entryPoints,
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "[name].js",
      clean: clean,
      assetModuleFilename: assetModuleFilename + "/[name][ext]",
      publicPath: publicPath === "" ? "/" : publicPath + "/",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            environment === "dev"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: environment !== "dev" ? "compressed" : undefined,
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|jpe?g|ico)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name][ext]",
            // Use env variable — dev gets "/", prod gets "/kitchen-sink/"
            publicPath: publicPath === "" ? "/" : publicPath + "/",
          },
        },
        {
          test: /\.(woff|woff2)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/webfonts/[name][ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
      ...(environment !== "dev"
        ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
        : []),
      ...htmlFiles.map((htmlFile) => {
        // Normalize here too so chunks array matches the entry point key
        const chunkName = htmlFile
          .replace(htmlFileRegex, "")
          .replace(".html", "")
          .replace(/\\/g, "/");

        return new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace(htmlFileRegex, ""),
          chunks: [chunkName],
          inject: true,
        });
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};
