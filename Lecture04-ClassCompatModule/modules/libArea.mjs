// libArea.mjs
function areaTriangle(b,h){
    return(b*h)/2;
}

function areaCricle(r){
    return Math.PI * r*r ;
}

function areaSqr(w,l){
    return w*l ;
}

export{ areaCricle,areaTriangle,areaSqr};