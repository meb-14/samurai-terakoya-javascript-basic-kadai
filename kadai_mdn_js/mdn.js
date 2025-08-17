const today = new Date("2025-08-17");

const year = today.getFullYear();

const month = today.getMonth() + 1;

const day = today.getDate();

const dateString = `${year}年${month}月${day}日`; //テンプレートリテラル

console.log(dateString);
