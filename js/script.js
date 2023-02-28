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

    
    function model(obj) {
        
        fetch('../models.json')
        .then((response) => response.json())
        .then((json) => {
     
            document.querySelector("#modelSelect").innerHTML = ``
            json.forEach(element => {
              if (element.Fabrikat === obj.value) {
               document.querySelector("#modelSelect").innerHTML += `<option value=${element.Model}>${element.Model}</option>`
            }  
            });
            
        });
}

function type(obj) {
   let types = []     
    fetch('../models.json')
    .then((response) => response.json())
    .then((json) => {
 
        document.querySelector("#typeSelect").innerHTML = ``
        json.forEach(element => {
          if (element.Model === obj.value) {
            if (!types.includes(element.Rotor_diameter_i_meter)) {
                document.querySelector("#typeSelect").innerHTML += `<option value=${element.Rotor_diameter_i_meter}>${element.Rotor_diameter_i_meter}</option>`
                types.push(element.Rotor_diameter_i_meter)
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

  