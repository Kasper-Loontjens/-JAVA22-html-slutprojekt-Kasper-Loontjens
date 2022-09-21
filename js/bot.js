
function isChecked(){
    if(document.getElementById('som').checked){
        document.getElementById('hand').style.display='flex';
    }else{
        document.getElementById('hand').style.display='none';
    }
}

sourcename = document.getElementById('show').src;

function displayprojectimg(img){
    document.getElementById('show').src=img;
}
function stopdisplayprojectimg(){
    document.getElementById('show').src=sourcename;
}