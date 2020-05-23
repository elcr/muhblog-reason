type critical = {
    html: string,
    css: string
};


[@bs.module "emotion-server"]
external extractCritical: string => critical = "extractCritical";
