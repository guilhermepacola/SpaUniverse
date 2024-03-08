import {Router} from "./routes.js"



const router = new Router()

<<<<<<< HEAD
router.add("/", "./pages/Home.html")
router.add("/Universe", "./pages/Universe.html")
router.add("/Exploration", "./pages/Exploration.html")
router.add(404, "./pages/Error.html")
=======
router.add("/", "./../pages/Home.html")
router.add("/universe", "./../pages/Universe.html")
router.add("/exploration", "./../pages/Exploration.html")
router.add(404, "./../pages/error.html")
>>>>>>> a605a188df9313989d899d3e21f54b29d1ac1e20

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
<<<<<<< HEAD
window.onsubmit = () => router.route()
=======
>>>>>>> a605a188df9313989d899d3e21f54b29d1ac1e20


