fetch('../models.json')
    .then((response) => response.json())
    .then((json) => {
        let firm = []
        console.log(json);
        json.forEach(element => {
            if (!firm.includes(element.Fabrikat)) {
              document.querySelector("#fabrikantSelect").innerHTML += `<option value=${element.Fabrikat}>${element.Fabrikat}</option>`
              firm.push(element.Fabrikat)  
            }
            
        });
    });
    function sweptArea(radius) {
      const bladeArea = Math.PI * radius ** 2; // Calculate the area of one blade
      const totalArea = bladeArea * 1; // Multiply by the number of blades
      return totalArea;
    }
    function simType(obj) {
      switch (obj.value) {
        case "0":
          console.log(obj.value);
          document.querySelector("#vind").style.display = "none"
          break;
          case "1":
            console.log(obj.value);
            document.querySelector("#vind").style.display = "block"
            break;
            case "2":
              console.log(obj.value);
              document.querySelector("#vind").style.display = "none"
              break;
              case "3":
                console.log(obj.value);
                document.querySelector("#vind").style.display = "block"
                break;
        default:
          console.log(obj.value);
          break;
      }
    }
    function model(obj) {
        
        fetch('../models.json')
        .then((response) => response.json())
        .then((json) => {
     
            document.querySelector("#modelSelect").innerHTML = ``
            json.forEach(element => {
              

              console.log(obj.options[obj.options.selectedIndex].innerText);

              if (element.Fabrikat === obj.options[obj.options.selectedIndex].innerText) {
                
               document.querySelector("#modelSelect").innerHTML += `<option value=${element.Model}>${element.Model}</option>`
            }  
            });
            
        });
}

function types(obj) {
   let types = []     
    fetch('../models.json')
    .then((response) => response.json())
    .then((json) => {
 
        document.querySelector("#millSpecs").innerHTML = ``
        json.forEach(element => {

          if (element.Model === obj.options[obj.options.selectedIndex].innerText) {
            if (!types.includes(element.Kapacitet_i_kw)) {
                document.querySelector("#millSpecs").innerHTML += 
                `
                <li>Fabrikat: ${element.Fabrikat}</li>
                <li>Model: ${element.Model}</li>
                <li>Kapacitet: ${element.Kapacitet_i_kw} kW</li>
                <li>Rotor diameter: ${element.Rotor_diameter_i_meter} m</li>
                <li>Navhøjde: ${element.Navhøjde_i_meter} m</li>
                <li>Rotorareal: ${sweptArea(element.Rotor_diameter_i_meter / 2 ).toFixed(2)} m2</li>
                <li>Turbine total height: ${element.Navhøjde_i_meter + element.Rotor_diameter_i_meter} m</li>
                `
               
            }
          
        }  
        });
        
    });
}

function specs(obj) {
  fetch('../models.json')
    .then((response) => response.json())
    .then((json) => {
 
        document.querySelector("#millSpecs").innerHTML = ``
        json.forEach(element => {
          if (element.Model === obj.options[obj.options.selectedIndex].innerText) {
            if (!types.includes(element.Kapacitet_i_kw)) {
                document.querySelector("#millSpecs").innerHTML += `<option value=${element.Kapacitet_i_kw}>${element.Kapacitet_i_kw}</option>`
                
            }
          
        }  
        });
        
    });
}
let numbers = []
let numDays = []
function chart(num, lab) {
   
     
    const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: lab,
        datasets: [{
          label: '# of Votes',
          data: num,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}

function timer() {
    numbers = []
    numDays = []
    

    
    let count = 2
    let count2 = 0
    let days = parseInt(document.querySelector("#daySelect").value)
    let runtime = 10000 / 5
    document.querySelector("#day").innerHTML = "Dag: 1" 
    
    let interval2 = setInterval(() => {
        if (count2 < 24 + 1) {
        
     document.querySelector("#hour").innerHTML = "Timer: " + count2++ 
    }else{
        if (count < days + 1) {
            console.log(count);
            console.log(numbers);
            numbers.push(Math.floor(Math.random() * 100))
            
         document.querySelector("#day").innerHTML = "Dag: " + count++ 
        }else{
            
            clearInterval(interval2)
            
        }
        console.log("Triggered");
        count2 = 1
    }
    }, runtime / 24);
  setTimeout(() => {
    for (let index = 0; index < parseInt(document.querySelector("#daySelect").value) * 24 + 1; index++) {
        numDays.push(index)
        numbers.push(Math.floor(Math.random() * 3))
        
    }
    const ctx = document.getElementById('myChart');
    
        
  
    
    if (document.getElementById('myChart').innerHTML === "") {
        const LaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: numDays,
        datasets: [{
          label: '# of Votes',
          data: numbers,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
      
    });
    }else{
    LaChart.destroy()
    const LaChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: numDays,
          datasets: [{
            label: '# of Votes',
            data: numbers,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
        
      });
    }
    
    
    
    }, 6000);
    
}

  