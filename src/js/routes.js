
export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
        window.history.pushState({}, "", event.currentTarget.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#app").innerHTML = html
            })

        this.changeTitle(route)
    }

    changeTitle(route) {
        const titleDocument = document.getElementById('titleDocument')
        const textValue = route.split("SpaUniverse/").pop().split(".")[0];
        const bodybg = document.querySelector("body")

        if (route) {
            titleDocument.innerText = `${textValue}`
        }
        bodybg.className = ""
        bodybg.classList.toggle(textValue)

    }

    addEventListeners() {
        document.getElementById('page').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                this.route(event);
            });
        });
    }

}
