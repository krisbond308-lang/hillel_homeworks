var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

services.price = function () {
    let total = 0;

    for (let service in this) {
        if (service !== "price" && service !== "minPrice" && service !== "maxPrice") {
            total += parseInt(this[service]);
        }
    }

    return total;
};

services.minPrice = function () {
    let min = Infinity;

    for (let service in this) {
        if (service !== "price" && service !== "minPrice" && service !== "maxPrice") {
            let price = parseInt(this[service]);

            if (price < min) {
                min = price;
            }
        }
    }

    return min;
};

services.maxPrice = function () {
    let max = 0;

    for (let service in this) {
        if (service !== "price" && service !== "minPrice" && service !== "maxPrice") {
            let price = parseInt(this[service]);

            if (price > max) {
                max = price;
            }
        }
    }

    return max;
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice())