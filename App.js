const heading = React.createElement(
  "h1",
  { id: "heading", archit: "sharma ji" },
  "hello world from react"
);

//const count = React.useRef(0);

console.log(heading);
const child2 = React.createElement("div", { id: "child2" }, [
  React.createElement("h1", { id: "heading1" }, ""),
  React.createElement("h2", { id: "heading2" }, ""),
]);
const child1 = React.createElement("div", { id: "child1" }, [
  React.createElement("h1", { id: "heading3" }, ""),
  React.createElement("h2", { id: "heading4" }, ""),
]);
const body = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
//console.log(count.current);
root.render(body);
