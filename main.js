// Copyrigth (c) Miracle Programmer(Shakhbozbek Usmonov) 2023. All rights reserved.

// String prototype methods charAt Hard Code
String.prototype.charAt = function (index) {
    return this[index];
};

// String prototype methods charCodeAt Hard Code
String.prototype.charCodeAt = function (index) {
    return this.charCodeAt(index);
};

// String prototype methods concat Hard Code
String.prototype.concat = function (str) {
    return this + str;
};

// String prototype methods endsWith Hard Code
String.prototype.endsWith = function (str) {
    return this.slice(-str.length) === str;
};

// String prototype methods includes Hard Code
String.prototype.includes = function (str) {
    return this.indexOf(str) !== -1;
};

// String prototype methods fromCharCode Hard Code
String.prototype.indexOf = function (str) {
    for (let i = 0; i < this.length; i++) {
        if (this.slice(i, i + str.length) === str) {
            return i;
        }
    }
    return -1;
};

// String prototype methods fromCharCode Hard Code
String.prototype.lastIndexOf = function (str) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this.slice(i, i + str.length) === str) {
            return i;
        }
    }
    return -1;
};

// String prototype methods repeat Hard Code
String.prototype.repeat = function (num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += this;
    }
    return str;
};

// String prototype methods replace Hard Code
String.prototype.replace = function (str, newStr) {
    return this.split(str).join(newStr);
};

// String prototype methods search Hard Code
String.prototype.search = function (str) {
    return this.indexOf(str);
};

// String prototype methods slice Hard Code
String.prototype.slice = function (start, end) {
    let str = "";
    for (let i = start; i < end; i++) {
        str += this[i];
    }
    return str;
};

// String prototype methods split Hard Code
String.prototype.split = function (str) {
    let arr = [];
    let temp = "";
    for (let i = 0; i < this.length; i++) {
        if (this.slice(i, i + str.length) === str) {
            arr.push(temp);
            temp = "";
            i += str.length - 1;
        } else {
            temp += this[i];
        }
    }
    arr.push(temp);
    return arr;
};

// String prototype methods startsWith Hard Code
String.prototype.startsWith = function (str) {
    return this.slice(0, str.length) === str;
};

// String prototype methods endsWith Hard Code
String.prototype.endsWith = function (str) {
    return this.slice(-str.length) === str;
};

// String prototype methods substr Hard Code
String.prototype.substr = function (start, length) {
    let str = "";
    for (let i = start; i < start + length; i++) {
        str += this[i];
    }
    return str;
};

// String prototype methods substring Hard Code
String.prototype.substring = function (start, end) {
    let str = "";
    for (let i = start; i < end; i++) {
        str += this[i];
    }
    return str;
};

// String prototype methods toLowerCase Hard Code
String.prototype.toLowerCase = function () {
    let str = "";
    for (let i = 0; i < this.length; i++) {
        str += this[i].toLowerCase();
    }
    return str;
};

// String prototype methods toUpperCase Hard Code
String.prototype.toUpperCase = function () {
    let str = "";
    for (let i = 0; i < this.length; i++) {
        str += this[i].toUpperCase();
    }
    return str;
};

// String prototype methods trim Hard Code
String.prototype.trim = function () {
    let str = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== " ") {
            str += this[i];
        }
    }
    return str;
};

// String prototype methods trimLeft Hard Code
String.prototype.trimLeft = function () {
    let str = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== " ") {
            str += this[i];
        }
    }
    return str;
};

// String prototype methods trimRight Hard Code
String.prototype.trimRight = function () {
    let str = "";
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] !== " ") {
            str += this[i];
        }
    }
    return str.split("").reverse().join("");
};

// String prototype methods valueOf Hard Code
String.prototype.valueOf = function () {
    return this;
};

// String prototype methods toString Hard Code
String.prototype.toString = function () {
    return this;
};

// String prototype methods toLocaleLowerCase Hard Code
String.prototype.toLocaleLowerCase = function () {
    return this.toLowerCase();
};

// String prototype methods toLocaleUpperCase Hard Code
String.prototype.toLocaleUpperCase = function () {
    return this.toUpperCase();
};

// String prototype methods match Hard Code
String.prototype.match = function (str) {
    return this.split(str);
};

// String prototype methods localeCompare Hard Code
String.prototype.localeCompare = function (str) {
    return this.length - str.length;
};

// String prototype methods padEnd Hard Code
String.prototype.padEnd = function (length, str) {
    let str1 = "";
    for (let i = 0; i < length; i++) {
        str1 += str;
    }
    return this + str1;
};

// String prototype methods padStart Hard Code
String.prototype.padStart = function (length, str) {
    let str1 = "";
    for (let i = 0; i < length; i++) {
        str1 += str;
    }
    return str1 + this;
};

// String prototype methods raw Hard Code
String.raw = function (str) {
    return str;
};

// String prototype methods trimStart Hard Code
String.prototype.trimStart = function () {
    return this.trimLeft();
};

// String prototype methods trimEnd Hard Code
String.prototype.trimEnd = function () {
    return this.trimRight();
};

// String prototype methods codePointAt Hard Code
String.prototype.codePointAt = function (index) {
    return this.charCodeAt(index);
};

// String prototype methods normalize Hard Code
String.prototype.normalize = function () {
    return this;
};

// String prototype methods replaceAll Hard Code
String.prototype.replaceAll = function (str, newStr) {
    return this.replace(str, newStr);
};

// String property length Hard Code
Object.defineProperty(String.prototype, "length", {
    get: function () {
        let count = 0;
        for (let i = 0; i < this.length; i++) {
            count++;
        }
        return count;
    },
});

// String property prototype Hard Code
Object.defineProperty(String, "prototype", {
    get: function () {
        return this;
    },
});
