import {Router} from "./routes.js"



const router = new Router()

router.add("/", "./pages/Home.html")
router.add("/Universe", "./pages/Universe.html")
router.add("/Exploration", "./pages/Exploration.html")
router.add(404, "./pages/Error.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
window.onsubmit = () => router.route()


