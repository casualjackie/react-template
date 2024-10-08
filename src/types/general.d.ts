declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.webp";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";

declare module "*.module.css" {
  const styles: { [key: string]: string };
  export default styles;
}
