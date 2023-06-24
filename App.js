const heading = React.createElement(
  "h1",
  { id: "heading", archit: "sharma ji" },
  "hello world from react"
);

//const count = React.useRef(0);

console.log(
  heading
); /* heading here is object created using the React.createElement has 3 params:
1. element 
2. attributes
3. content
all 3 are the children */

/*
ReactElement(Object) => HTML(Browser understands) 
*/

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
