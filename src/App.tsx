// import ListGroup from "./components/ListGroup";
// import Alert from "./assets/alert";
import Button from "./button";
function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleselectitem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>My Button</Button>
    </div>
  );
}
export default App;
//   <div>
// {/* //     <ListGroup */}
// //       items={items}
// //       heading="Cities"
// //       onselectitem={handleselectitem}
// //     />
// //     ; */
// //   </div>
// // );
