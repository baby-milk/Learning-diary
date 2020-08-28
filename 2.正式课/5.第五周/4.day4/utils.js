let utils=(function(){
    function drag(doc){
        let offsetX = 0;
        let offsetY = 0;
        let flag = false;
        doc.onmousedown = function (e) {
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            flag = true;
        }
        doc.onmousemove = function (e) {
            if (flag) {
                let left = e.clientX;
                let top = e.clientY;
                doc.style.left =left-offsetX+"px";
                doc.style.top =top-offsetY+"px";
            }
        }
        doc.onmouseup = function () {
            flag = false;
        }
    }

    return {
        drag
    }
})()