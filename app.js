

Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log(Hours);

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

for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(23, 65));

    let CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

}

let parent = document.getElementById('City');
console.log(parent);

let child = document.createElement('p');
console.log(child);

parent.appendChild(child);
child.textContent = 'Seattle';

let unorderList = document.createElement('ul');
parent.appendChild(unorderList);

for (i=0; i<CookiesPerHours.length ; i++){

    let listItem = document.createElement('li');
    unorderList.appendChild(listItem);
    listItem.textContent = CookiesPerHours[i];

}









let Tokyo = {
    minCookies: 3,
    maxCookies: 24,
    avgCookies: 1.2,
    ggetCustomersPerHours: function () {
        this.getCustomersPerHours = randomCustomers(3, 24)
        console.log(this.getCustomersPerHours);
    }
}

for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(3, 24));

    let CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

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

for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(11, 38));

    let CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

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

for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(20, 38));

    let CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);

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

for (i = 0; i < Hours.length; i++) {
    let CustomersPerHours = (Hours[i], randomCustomers(2, 16));

    let CookiesPerHours = Math.floor(Seattle.avgCookies * CustomersPerHours);
    console.log(Hours[i], CookiesPerHours);
}


