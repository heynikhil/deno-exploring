import { Router } from 'https://deno.land/x/oak/mod.ts'
import { get } from './controllers/index.ts'

const router = new Router()

router.get('/', get)

export default router