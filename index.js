let previewContainer = document.querySelector('.data-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.grid-lg .product').forEach(product =>{
 product.onclick = () =>{
    previewContainer.style.display = 'flex'; 
  let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
       let target = preview.getAttribute('data-target');
       if(name == target){
            preview.classList.add('active');
       }
    });
 }
});
previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
});