import {Router} from "./routes.js"



const router = new Router()

router.add("/SpaUniverse/", "./pages/Home.html")
router.add("/SpaUniverse/universe", "./../pages/Universe.html")
router.add("/SpaUniverse/exploration", "./../pages/Exploration.html")
router.add(404, "./../pages/Error.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
