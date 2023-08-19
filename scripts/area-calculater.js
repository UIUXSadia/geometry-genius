function calculateTriangleArea(){
    //get triangle base value
    const baseleField = document.getElementById('triangle-base');
    const baseleValueText = baseleField.value;
    const base = parseFloat(baseleValueText);
    console.log(base);
    // clear
    baseleField.value = '';

    // get triangle height value
    const heightleField = document.getElementById('triangle-height');
    const heightleValueText = heightleField.value;
    const height = parseFloat(heightleValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);
    //clear 
    heightleField.value ='';
    //show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText =area;
    

}

function calculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);


    //get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    //calculate area
    const area = width * length;
    console.log(area);
    
    //show rectangle area
    const areaSpan = document.getElementById('Rectangle-area');
    areaSpan.innerText = area;


}