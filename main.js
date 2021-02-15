// --------------variables-----------------
const $ = selector => document.querySelector(selector);
const textareaForm = document.forms.textareaForm;
const styleForm = document.forms.styleForm;
const addForm = document.forms.add;
const tableForm = document.forms.tableForm;
const topBlock = $('.top-block');

// return rgb-color
const randomColor = () => {

    // generate random number
    let randomizer = () => {
        return Math.round(Math.random()*255)
    };

    let r = randomizer();
    let g = randomizer();
    let b = randomizer();
    let color = `rgb(${r},${g},${b})`;

    return color;
};
// ----------------
// ----------------end variables--------------

// ---------------Scripts-----------------
// show textarea-Form
$('.edit_btn').onclick = function(){
    
    $('.style_form').style.display = 'none';
    $('.textarea_form').style.display = 'block';
    textareaForm.textarea.value = topBlock.innerHTML;
}
// -------------------

// hide textarea-Form and push changes from textarea to TopBlock 
$('.save_btn').onclick = function(){
    $('.textarea_form').style.display = 'none';
    topBlock.innerHTML = textareaForm.textarea.value
}
// --------------------

// show block with styles for topBlock
$('.style_btn').onclick = function(){
    $('.textarea_form').style.display = 'none';
    $('.style_form').style.display = 'block';
}
// ---------------------

// choise Size, Family, Style, Weight for Font
styleForm.onchange = function(){
    if(event.target.name == 'fsize'){
        topBlock.style.fontSize = event.target.value
    }

    if(event.target.name == 'fontFamily'){
        topBlock.style.fontFamily = `${event.target.value}`
    }

    if(event.target.checked){
        if(event.target.value == 'italic'){
            topBlock.style.fontStyle = `${event.target.value}`
        }else{
            topBlock.style.fontWeight = `600`
        }
        
    }else if(event.target.checked == false){
        if(event.target.value == 'italic'){
            topBlock.style.fontStyle = `normal`
        }else{
            topBlock.style.fontWeight = `400`
        }
    }
}
// ---------------------

// show ColorsBlock for text
$('.ctxt_btn').onclick = function(){

    $('.text_colors').innerHTML = '';

    // create ColorsBlock for text
    for(let i = 0; i<9; i++){
        $('.text_colors').innerHTML += `<div class="color_item"></div>`;
        $('.text_colors').children[i].style.background = randomColor();
    }
    
    $('.text_colors').style.display = 'flex';
}
// --------------------

// styling for text color
$('.text_colors').onclick = function (){
    let color = getComputedStyle(event.target).backgroundColor;

    if(event.target.className == 'color_item'){
        topBlock.style.color = color;
        $('.text_colors').style.display = 'none'
    }
}
// ----------------------

// show ColorsBlock for Background
$('.cbg_btn').onclick = function(){

    $('.bg_colors').innerHTML = '';

    // create ColorsBlock for text
    for(let i = 0; i<9; i++){
        $('.bg_colors').innerHTML += `<div class="color_item"></div>`;
        $('.bg_colors').children[i].style.background = randomColor();
    }
    
    $('.bg_colors').style.display = 'flex';
}
// --------------------

// styling for background of top block
$('.bg_colors').onclick = function (){
    let color = getComputedStyle(event.target).backgroundColor;

    if(event.target.className == 'color_item'){
        topBlock.style.backgroundColor = color;
        $('.bg_colors').style.display = 'none'
    }
}
// -----------------------

// hide all blocks and show block for adding table or list
$('.add_btn').onclick = function (){
    topBlock.style.display = 'none';
    $('.btns-block').style.display = 'none';
    $('.bottom-block').style.display = 'none';
    $('.add').style.display = 'block';

}
// -----------------------

// show or hide table style or list style
addForm.onchange = function () {
    if(add.table.checked){
        $('.table_form').style.display = 'block'
    }else{
        $('.table_form').style.display = 'none'
    }

    if(add.list.checked){
        $('.list_form').style.display = 'block'
    }else{
        $('.list_form').style.display = 'none'
    }
}
// ----------------

// adding table to textarea
$('.table_btn').onclick = function () {
    let width = tableForm.widthTD.value;
    let height = tableForm.heightTD.value;
    let borderW = tableForm.borderW.value;
    let stBorder = tableForm.typeBorder.value;
    let cBorder = tableForm.colorBorder.value;

    topBlock.style.display = 'block';
    $('.btns-block').style.display = 'block';
    $('.bottom-block').style.display = 'block';
    $('.add').style.display = 'none';

    
    textareaForm.textarea.value += `<table style="border-collapse: collapse">`
    
    for(let i = 0; i < tableForm.countTR.value; i++){
        textareaForm.textarea.value += `<tr>`
        for(let i = 0; i < tableForm.countTD.value; i++){
            textareaForm.textarea.value += `<td style="width: ${width}px; height: ${height}px; border: ${borderW}px ${stBorder} ${cBorder}">TD</td>`
        }
        textareaForm.textarea.value += `</tr>`
    }

    textareaForm.textarea.value += `</table>`
}
// ---------------------

// adding list to textarea
$('.list_btn').onclick = function (){
    let countLi = $('.list_form').widthTD.value;
    let listStyle = $('.list_form').listStyle.value;

    topBlock.style.display = 'block';
    $('.btns-block').style.display = 'block';
    $('.bottom-block').style.display = 'block';
    $('.add').style.display = 'none';

    textareaForm.textarea.value += `<ul style="list-style: ${listStyle}">`
    for(let i = 0; i < countLi; i++){
        textareaForm.textarea.value += `<li>item ${i+1}</li>`
    }
    textareaForm.textarea.value += `</ul>`

    $('.list_form').widthTD.value = ''
}
// -----------------------