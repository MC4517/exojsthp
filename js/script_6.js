var str="CCG UCG UUG CGC UAC AGC";

str=str.replace("CCG", "Proline ");
str=str.replace("UCG", "Sérine ");
str=str.replace("UUG", "Leucine ");
str=str.replace("CGC", "Arginine ");
str=str.replace("UAC", "Tyrosine ");
str=str.replace("AGC", "Sérine ");
console.log(str);

var str="CCU CGC CGG UAC UUC UCG";
str=str.replace("CCU", "Proline ");
str=str.replace("UCG", "Sérine ");
str=str.replace("CGG", "Tyrosine ");
str=str.replace("UUG", "Leucine ");
str=str.replace("UUC", "Leucine ")
str=str.replace("CGC", "Arginine ");
str=str.replace("UAC", "Tyrosine ");
console.log(str)