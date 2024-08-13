const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: isDev ? "development" : "production",
  entry: "./index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    port: 3000,
    hot: isDev,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devtool: isDev ? "source-map" : undefined,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new ESLintPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif|ttf|woff|woff2|eot)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    regenerator: true,
                  },
                ],
                ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
                isDev && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ].filter(Boolean),
      },
    ],
  },
};
