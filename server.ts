import { Application } from 'https://deno.land/x/oak/mod.ts';
import { viewEngine, engineFactory, adapterFactory, ViewConfig } from 'https://deno.land/x/view_engine/mod.ts';
import router from './routes.ts'
const port = 5000

const app = new Application()
const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

app.use(viewEngine(oakAdapter, ejsEngine, {
    viewRoot: "./view",
    viewExt: ".html", // .ejs
}));

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Magic port ${port}`)

await app.listen({ port })