import logoReact from "~/imgs/logoReact.png"
import logoScss from "~/imgs/logoSass.svg"
const initState = [
    {
        id: 0,
        logos: [logoReact, logoScss],
        titles: {
            heading: "New Product",
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore dignissimos. Doloribus, iusto error! Neque ad delectus quisquam? In veritatis, vero doloremque harum animi iste dolorum? Blanditiis at suscipit dolor?",
            link: "https://my-app-huynhthuoc.vercel.app/",
        },
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
    },
]

const reducer = function (state, action) {}

export default reducer
export { initState }
