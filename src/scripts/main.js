import add from "./modules/additionModule";
import substraction from "./modules/substractionModule";
import "../styles/main.scss";

console.log(add(1, substraction(3, add(5, 5))) - 5);

$(".button").click(() => {
    console.log("Jem zupe");
});
