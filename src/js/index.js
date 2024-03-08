import {Router} from "./routes.js"



const router = new Router()

router.add("/", "./pages/Home.html")
router.add("/universe", "./pages/Universe.html")
router.add("/exploration", "./pages/Exploration.html")
router.add(404, "./pages/error.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()


