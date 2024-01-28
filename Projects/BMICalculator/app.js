const form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value);
    const results= document.querySelector("#results");

    if(height==='' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a valid height ${height}`;
    } else if(weight==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid weight ${weight}`;
    }

    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        //show the result

        if(BMI < 18.6){
            results.innerHTML = `Your BMI = ${BMI} and You are Under Weightt`;
        }
        if(BMI <18.6 && BMI > 24.9){
            results.innerHTML = `Your BMI = ${BMI} and You are In Normal Range`;
        }

        else{
            results.innerHTML = `Your BMI = ${BMI} and You are Over Weightt`;
        }
    }


    
});