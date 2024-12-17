const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", function checkBoxes () {
    const zavatra = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;


        if(boxTop < zavatra){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    });

   
});
