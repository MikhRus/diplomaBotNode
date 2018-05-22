function add(a) {
    const arr = a.split(' ');
    var resp=0;
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i]);
        resp +=  parseInt(arr[i]);
    }
    return resp;
}




function url(a) {
    return (`http://bik.sfu-kras.ru/nb/search?query=${a}&type=Author`)
}