//Gör nav baren synlig eller osynlig beroende på om checkboxen är i klickad.
function isChecked(){
    if(document.getElementById('som').checked){
        document.getElementById('hand').style.display='flex';
    }else{
        document.getElementById('hand').style.display='none';
    }
}
//sparar en image source
sourcename = document.getElementById('show').src;
//Byter ut image source till en ny
function displayprojectimg(img){
    document.getElementById('show').src=img;
}
//byter tillbaks image source till den sparade
function stopdisplayprojectimg(){
    document.getElementById('show').src=sourcename;
}