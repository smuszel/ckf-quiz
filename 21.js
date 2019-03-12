const x = !'';
const y = !{};

if (x || x && y) {
    console.log(1);
} 

if ((x || x) && y) {
    console.log(2);
}