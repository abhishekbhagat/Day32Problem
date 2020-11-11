const HEAD = 0;
const TAIL = 1;
for (i = 0; i < 10; i++) {
    let choice = Math.floor(Math.random() * 10) % 2;
    if (choice == HEAD)
        console.log("Head");
    else
        console.log("Tail");
}