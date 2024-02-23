const heading = React.createElement("div",{ id: "header"}, 
[
React.createElement("h1",{id: "nestedHeader"},"Hello Everyone, welcome to"),
React.createElement("h3",{id: "NextHeader"},"Next Header")
]

);

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root)
root.render(heading);