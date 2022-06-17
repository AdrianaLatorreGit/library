// Método MAP

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log("this -> maça", mapComThis(nums, maca));

console.log("this -> laranja", mapComThis(nums, laranja));

// SEM THIS

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums1 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums1));

console.log(nums1);
