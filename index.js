const timetable = document.querySelectorAll('.grid div');
// timetable[7] to timetable[36] is periods
// timetable[13].classList.toggle('ongoing-start');
// timetable[19].classList.toggle('ongoing-end');
// for(let i=14;i<19;i++){

//     timetable[i].classList.toggle('ongoing');
// }
const currentClassSpan = document.querySelector('.current-timetable');
starting = [timetable[7], timetable[13], timetable[20], timetable[25], timetable[32]]
ending = [timetable[12], timetable[19], timetable[24], timetable[31], timetable[36]]

rows = [[timetable[7],timetable[8],timetable[9],timetable[10],timetable[11],timetable[12]],
[timetable[13],timetable[14],timetable[15],timetable[16],timetable[17],timetable[18],timetable[19]],
[timetable[20],timetable[21],timetable[22],timetable[23],timetable[24]],
[timetable[25],timetable[26],timetable[27],timetable[28],timetable[29],timetable[30],timetable[31]],
[timetable[32],timetable[33],timetable[34],timetable[35],timetable[36]]]
let c = new Date();
rows[c.getDay()-1].forEach(element => {
    element.classList.toggle("ongoing");
});
rows[c.getDay()-1].slice(-1)[0].classList.toggle("ongoing-end");
rows[c.getDay()-1][0].classList.toggle("ongoing-start");
console.log(rows[c.getDay()-1].slice(-1))
setInterval(function () {
    let d = new Date();
    if(8-d.getHours()>-7){
        const period = Math.abs(8-d.getHours());
        rows[c.getDay()-1][period].classList.add("current");
        currentClassSpan.innerText=rows[c.getDay()-1][period].innerText;
    }
},1000);

timetable.forEach((cell) => {
    cell.addEventListener('click',()=> {
        if(cell.classList[0] === "current" || cell.classList[1] === "current"){
            cell.classList.toggle("ongoing");
        }

    })
})