

Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    minCookies: 23,
    maxCookies: 65,
    avgCookies: 6.3,
     getCustomersPerHours: function () {
        this.getCustomersPerHours = randomCustomers(23, 65)
        console.log(this.getCustomersPerHours);
    }
}
Seattle.getCustomersPerHours()

function randomCustomers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

let CustomersPerHours;

let CookiesPerHours;

for (i = 0; i < Hours.length; i++) {
    CustomersPerHours = (Hours[i], randomCustomers(23, 65));

    CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    
   console.log(Hours[i],CookiesPerHours);
}

let city1 = document.getElementById('City');
console.log(city1);

let child1 = document.createElement('p');
console.log(child1);

city1.appendChild(child1);
child1.textContent = 'Seattle';

let unorderList1 = document.createElement('ul');
city1.appendChild(unorderList1);

 for (let i=0 ; i<Hours.length; i++){
    let listItem1=document.createElement('li');
    unorderList1.appendChild(listItem1);
    listItem1.textContent=[`${Hours[i]}:${CookiesPerHours}`];
}



let Tokyo = {
    minCookies: 3,
    maxCookies: 24,
    avgCookies: 1.2,
    getCustomersPerHours: function () {
        this.getCustomersPerHours = randomCustomers(3, 24)
        console.log(this.getCustomersPerHours);
    }
}
Tokyo.getCustomersPerHours()
for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(3, 24));

    CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

}

let city2 = document.getElementById('City');
console.log(parent);

let child2 = document.createElement('p');
console.log(child2);

city2.appendChild(child2);
child2.textContent = 'Tokyo';

let unorderList2 = document.createElement('ul');
city2.appendChild(unorderList2);

for (let i=0 ; i<Hours.length; i++){
    let listItem2=document.createElement('li');
    unorderList2.appendChild(listItem2);
    listItem2.textContent=[`${Hours[i]}:${CookiesPerHours}`]
    


}

let Dubai = {
    minCookies: 11,
    maxCookies: 38,
    avgCookies: 3.7,
    getCustomersPerHours: function () {
        this.getCustomersPerHours = randomCustomers(11, 38)
        console.log(this.getCustomersPerHours);
    }
}
Dubai.getCustomersPerHours()
for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(11, 38));

    CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

}
let city3 = document.getElementById('City');
console.log(parent);

let child3 = document.createElement('p');
console.log(child3);

city3.appendChild(child3);
child3.textContent = 'Dubai';

let unorderList3 = document.createElement('ul');
city3.appendChild(unorderList3);

for (let i=0 ; i<Hours.length; i++){
    let listItem3=document.createElement('li');
    unorderList3.appendChild(listItem3);
    listItem3.textContent=[`${Hours[i]}:${CookiesPerHours}`]
    
    
}

let Paris = {
    minCookies: 20,
    maxCookies: 38,
    avgCookies: 2.3,
    getCustomersPerHours: function () {
        this.getCustomersPerHours = randomCustomers(20, 38)
        console.log(this.getCustomersPerHours);
    }
}
Paris.getCustomersPerHours()
for (i = 0; i < Hours.length; i++) {
    CustomersPerHours = (Hours[i], randomCustomers(20, 38));

    CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

}



let city4 = document.getElementById('City');
console.log(parent);

let child4 = document.createElement('p');
console.log(child4);

city4.appendChild(child4);
child4.textContent = 'Paris';

let unorderList4 = document.createElement('ul');
city4.appendChild(unorderList4);

for (let i=0 ; i<Hours.length; i++){
    let listItem4=document.createElement('li');
    unorderList4.appendChild(listItem4);
    listItem4.textContent=[`${Hours[i]}:${CookiesPerHours}`] 
    
}

let Lima = {
    minCookies: 2,
    maxCookies: 16,
    avgCookies: 4.6,
    getCustomersPerHours: function () {
        this.ggetCustomersPerHours = randomCustomers(2, 16)
        console.log(this.getCustomersPerHours);
    }
}
Lima.getCustomersPerHours()
for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(2, 16));

    CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);
}

let city5 = document.getElementById('City');
console.log(parent);

let child5 = document.createElement('p');
console.log(child5);

city5.appendChild(child5);
child5.textContent = 'Lima';

let unorderList5 = document.createElement('ul');
city5.appendChild(unorderList5);

for (let i=0 ; i<Hours.length; i++){
    let listItem5=document.createElement('li');
    unorderList5.appendChild(listItem5);
    listItem5.textContent=[`${Hours[i]}:${CookiesPerHours}`] 
    
}



