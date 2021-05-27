question = prompt("Salut ! Que veux-tu me dire ?")

function botReply(){

    if (question.charAt(question.length-1) == "?"){

        return "Ouais Ouais..";} 

    else if (question && question === question.toUpperCase()){

        return "Pwa, calme-toi..."
    ;}

    else if (question.includes("Fortnite")){
        return "On s'fait une partie soum-soum ?";}

    else if (question === ""){
        return "T'es en PLS ?"
   ;} 
    else 
    return "balek"
;}
        


console.log(botReply(question))