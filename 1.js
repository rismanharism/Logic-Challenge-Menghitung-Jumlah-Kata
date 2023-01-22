let kalimat = 'I have a dream'
let hasil = 1;
for(i=0; i <kalimat.length;i++){
    if(kalimat[i] === " "){
        hasil += 1
    }
}
if(kalimat.length === 0){
    console.log(kalimat.length)
}else{
    console.log(hasil);
}