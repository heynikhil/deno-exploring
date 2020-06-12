const get = async (ctx: any) => {
    ctx.render("index");
    // ctx.render("index", { data: { name: "Nikhil" } });
}


export { get }