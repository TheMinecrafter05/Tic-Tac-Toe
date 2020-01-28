let turn = "player"
let AI
let won = false

//PLAYER
function button1(){
    if(won == true) return;
    let button1 = document.getElementById("1")
    if(button1.innerText == "O" || button1.innerText == "X" || turn == "AI") return;
    button1.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button2(){
    if(won == true) return;
    let button2 = document.getElementById("2")
    if(button2.innerText == "O" || button2.innerText == "X" || turn == "AI") return;
    button2.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button3(){
    if(won == true) return;
    let button3 = document.getElementById("3")
    if(button3.innerText == "O" || button3.innerText == "X" || turn == "AI") return;
    button3.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button4(){
    if(won == true) return;
    let button4 = document.getElementById("4")
    if(button4.innerText == "O" || button4.innerText == "X" || turn == "AI") return;
    button4.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button5(){
    if(won == true) return;
    let button5 = document.getElementById("5")
    if(button5.innerText == "O" || button5.innerText == "X" || turn == "AI") return;
    button5.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button6(){
    if(won == true) return;
    let button6 = document.getElementById("6")
    if(button6.innerText == "O" || button6.innerText == "X" || turn == "AI") return;
    button6.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button7(){
    if(won == true) return;
    let button7 = document.getElementById("7")
    if(button7.innerText == "O" || button7.innerText == "X" || turn == "AI") return;
    button7.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button8(){
    if(won == true) return;
    let button8 = document.getElementById("8")
    if(button8.innerText == "O" || button8.innerText == "X" || turn == "AI") return;
    button8.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}

function button9(){
    if(won == true) return;
    let button9 = document.getElementById("9")
    if(button9.innerText == "O" || button9.innerText == "X" || turn == "AI") return;
    button9.innerText = "X"
    turn = "AI"
    document.getElementById("ansage").innerText = "AI's turn"
}


//AI

AI = setInterval(()=>{
    let button1 = document.getElementById("1")
    let button2 = document.getElementById("2")
    let button3 = document.getElementById("3")
    let button4 = document.getElementById("4")
    let button5 = document.getElementById("5")
    let button6 = document.getElementById("6")
    let button7 = document.getElementById("7")
    let button8 = document.getElementById("8")
    let button9 = document.getElementById("9")

//if someone got 3
if(button1.innerText == "O" && button2.innerText == "O" && button3.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button4.innerText == "O" && button5.innerText == "O" && button6.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button7.innerText == "O" && button8.innerText == "O" && button9.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button1.innerText == "O" && button4.innerText == "O" && button7.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button2.innerText == "O" && button5.innerText == "O" && button8.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button3.innerText == "O" && button6.innerText == "O" && button9.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button1.innerText == "O" && button2.innerText == "O" && button3.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button1.innerText == "O" && button5.innerText == "O" && button9.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}

if(button3.innerText == "O" && button5.innerText == "O" && button7.innerText == "O"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "AI hat gewonnen!"
    won = true
    return;
}



if(button1.innerText == "X" && button2.innerText == "X" && button3.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button4.innerText == "X" && button5.innerText == "X" && button6.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button7.innerText == "X" && button8.innerText == "X" && button9.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button1.innerText == "X" && button4.innerText == "X" && button7.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button2.innerText == "X" && button5.innerText == "X" && button8.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button3.innerText == "X" && button6.innerText == "X" && button9.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button1.innerText == "X" && button5.innerText == "X" && button9.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}

if(button3.innerText == "X" && button5.innerText == "X" && button7.innerText == "X"){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Player hat gewonnen!"
    won = true
    return;
}


if(button1.innerText != "" && button2.innerText != "" && button3.innerText != "" && button4.innerText != "" && button5.innerText != "" && button6.innerText != "" && button7.innerText != "" && button8.innerText != "" && button9.innerText != ""){
    clearInterval(AI)
    document.getElementById("ansage").innerText = "Unentschieden!"
    won = true
    return;
}



if(turn == "player") return console.log("Player turn");


//if AI is winning
if(button1.innerText == "O" && button5.innerText == "O" && button9.innerText != "X"){
    button9.innerText = "O"
    console.log("logged button9")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}else{
    if(button9.innerText == "O" && button5.innerText == "O" && button1.innerText != "X"){
        button1.innerText = "O"
        console.log("logged button1")
        turn = "player"
        document.getElementById("ansage").innerText = "Your turn"
        return;
    }else{
        if(button1.innerText == "O" && button9.innerText == "O" && button5.innerText != "X"){
            button5.innerText = "O"
            console.log("logged button5")
            turn = "player"
            document.getElementById("ansage").innerText = "Your turn"
            return;
        }else{
            if(button3.innerText == "O" && button5.innerText == "O" && button7.innerText != "X"){
                button7.innerText = "O"
                console.log("logged button7")
                turn = "player"
                document.getElementById("ansage").innerText = "Your turn"
                return;
            }else{
                if(button7.innerText == "O" && button5.innerText == "O" && button3.innerText != "X"){
                    button3.innerText = "O"
                    console.log("logged button3")
                    turn = "player"
                    document.getElementById("ansage").innerText = "Your turn"
                    return;
                }else{
                    if(button7.innerText == "O" && button3.innerText == "O" && button5.innerText != "X"){
                        button5.innerText = "O"
                        console.log("logged button5")
                        turn = "player"
                        document.getElementById("ansage").innerText = "Your turn"
                        return;
                    }else{
                        if(button1.innerText == "O" && button7.innerText == "O" && button4.innerText != "X"){
                            button4.innerText = "O"
                            console.log("logged button4")
                            turn = "player"
                            document.getElementById("ansage").innerText = "Your turn"
                            return;
                        }else{
                            if(button4.innerText == "O" && button7.innerText == "O" && button1.innerText != "X"){
                                button1.innerText = "O"
                                console.log("logged button1")
                                turn = "player"
                                document.getElementById("ansage").innerText = "Your turn"
                                return;
                            }else{
                                if(button1.innerText == "O" && button4.innerText == "O" && button7.innerText != "X"){
                                    button7.innerText = "O"
                                    console.log("logged button7")
                                    turn = "player"
                                    document.getElementById("ansage").innerText = "Your turn"
                                    return;
                                }else{
                                    if(button2.innerText == "O" && button5.innerText == "O" && button8.innerText != "X"){
                                        button8.innerText = "O"
                                        console.log("logged button8")
                                        turn = "player"
                                        document.getElementById("ansage").innerText = "Your turn"
                                        return;
                                    }else{
                                        if(button8.innerText == "O" && button2.innerText == "O" && button5.innerText != "X"){
                                            button5.innerText = "O"
                                            console.log("logged button8")
                                            turn = "player"
                                            document.getElementById("ansage").innerText = "Your turn"
                                            return;
                                        }else{
                                            if(button5.innerText == "O" && button8.innerText == "O" && button2.innerText != "X"){
                                                button2.innerText = "O"
                                                console.log("logged button2")
                                                turn = "player"
                                                document.getElementById("ansage").innerText = "Your turn"
                                                return;
                                            }else{
                                                if(button3.innerText == "O" && button6.innerText == "O" && button9.innerText != "X"){
                                                    button9.innerText = "O"
                                                    console.log("logged button9")
                                                    turn = "player"
                                                    document.getElementById("ansage").innerText = "Your turn"
                                                    return;
                                                }else{
                                                    if(button9.innerText == "O" && button3.innerText == "O" && button6.innerText != "X"){
                                                        button6.innerText = "O"
                                                        console.log("logged button6")
                                                        turn = "player"
                                                        document.getElementById("ansage").innerText = "Your turn"
                                                        return;
                                                    }else{//normal filling
                                                        if(button1.innerText == "O" && button2.innerText == "O" && button3.innerText != "X"){
                                                            button3.innerText = "O"
                                                            console.log("logged button3")
                                                            turn = "player"
                                                            document.getElementById("ansage").innerText = "Your turn"
                                                            return;
                                                        }else{
                                                            if(button2.innerText == "O" && button3.innerText == "O" && button1.innerText != "X"){
                                                                button1.innerText = "O"
                                                                console.log("logged button1")
                                                                turn = "player"
                                                                document.getElementById("ansage").innerText = "Your turn"
                                                                return;
                                                            }else{
                                                                if(button4.innerText == "O" && button5.innerText == "O" && button6.innerText != "X"){
                                                                    button6.innerText = "O"
                                                                    console.log("logged button6")
                                                                    turn = "player"
                                                                    document.getElementById("ansage").innerText = "Your turn"
                                                                    return;
                                                                }else{
                                                                    if(button6.innerText == "O" && button5.innerText == "O" && button4.innerText != "X"){
                                                                        button4.innerText = "O"
                                                                        console.log("logged button4")
                                                                        turn = "player"
                                                                        document.getElementById("ansage").innerText = "Your turn"
                                                                        return;
                                                                    }else{
                                                                        if(button7.innerText == "O" && button8.innerText == "O" && button9.innerText != "X"){
                                                                            button9.innerText = "O"
                                                                            console.log("logged button3")
                                                                            turn = "player"
                                                                            document.getElementById("ansage").innerText = "Your turn"
                                                                            return;
                                                                        }else{
                                                                            if(button9.innerText == "O" && button8.innerText == "O" && button7.innerText != "X"){
                                                                                button7.innerText = "O"
                                                                                console.log("logged button7")
                                                                                turn = "player"
                                                                                document.getElementById("ansage").innerText = "Your turn"
                                                                                return;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


//if player is winning
if(button1.innerText == "X" && button5.innerText == "X" && button9.innerText != "O"){
    button9.innerText = "O"
    console.log("logged button9")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}else{
    if(button9.innerText == "X" && button5.innerText == "X" && button1.innerText != "O"){
        button1.innerText = "O"
        console.log("logged button1")
        turn = "player"
        document.getElementById("ansage").innerText = "Your turn"
        return;
    }else{
        if(button1.innerText == "X" && button9.innerText == "X" && button5.innerText != "O"){
            button5.innerText = "O"
            console.log("logged button5")
            turn = "player"
            document.getElementById("ansage").innerText = "Your turn"
            return;
        }else{
            if(button3.innerText == "X" && button5.innerText == "X" && button7.innerText != "O"){
                button7.innerText = "O"
                console.log("logged button7")
                turn = "player"
                document.getElementById("ansage").innerText = "Your turn"
                return;
            }else{
                if(button7.innerText == "X" && button5.innerText == "X" && button3.innerText != "O"){
                    button3.innerText = "O"
                    console.log("logged button3")
                    turn = "player"
                    document.getElementById("ansage").innerText = "Your turn"
                    return;
                }else{
                    if(button7.innerText == "X" && button3.innerText == "X" && button5.innerText != "O"){
                        button5.innerText = "O"
                        console.log("logged button5")
                        turn = "player"
                        document.getElementById("ansage").innerText = "Your turn"
                        return;
                    }else{
                        if(button1.innerText == "X" && button7.innerText == "X" && button4.innerText != "O"){
                            button4.innerText = "O"
                            console.log("logged button4")
                            turn = "player"
                            document.getElementById("ansage").innerText = "Your turn"
                            return;
                        }else{
                            if(button4.innerText == "X" && button7.innerText == "X" && button1.innerText != "O"){
                                button1.innerText = "O"
                                console.log("logged button1")
                                turn = "player"
                                document.getElementById("ansage").innerText = "Your turn"
                                return;
                            }else{
                                if(button1.innerText == "X" && button4.innerText == "X" && button7.innerText != "O"){
                                    button7.innerText = "O"
                                    console.log("logged button7")
                                    turn = "player"
                                    document.getElementById("ansage").innerText = "Your turn"
                                    return;
                                }else{
                                    if(button2.innerText == "X" && button5.innerText == "X" && button8.innerText != "O"){
                                        button8.innerText = "O"
                                        console.log("logged button8")
                                        turn = "player"
                                        document.getElementById("ansage").innerText = "Your turn"
                                        return;
                                    }else{
                                        if(button8.innerText == "X" && button2.innerText == "X" && button5.innerText != "O"){
                                            button5.innerText = "O"
                                            console.log("logged button8")
                                            turn = "player"
                                            document.getElementById("ansage").innerText = "Your turn"
                                            return;
                                        }else{
                                            if(button5.innerText == "X" && button8.innerText == "X" && button2.innerText != "O"){
                                                button2.innerText = "O"
                                                console.log("logged button2")
                                                turn = "player"
                                                document.getElementById("ansage").innerText = "Your turn"
                                                return;
                                            }else{
                                                if(button3.innerText == "X" && button6.innerText == "X" && button9.innerText != "O"){
                                                    button9.innerText = "O"
                                                    console.log("logged button9")
                                                    turn = "player"
                                                    document.getElementById("ansage").innerText = "Your turn"
                                                    return;
                                                }else{
                                                    if(button9.innerText == "X" && button3.innerText == "X" && button6.innerText != "O"){
                                                        button6.innerText = "O"
                                                        console.log("logged button6")
                                                        turn = "player"
                                                        document.getElementById("ansage").innerText = "Your turn"
                                                        return;
                                                    }else{//normal filling
                                                        if(button1.innerText == "X" && button2.innerText == "X" && button3.innerText != "O"){
                                                            button3.innerText = "O"
                                                            console.log("logged button3")
                                                            turn = "player"
                                                            document.getElementById("ansage").innerText = "Your turn"
                                                            return;
                                                        }else{
                                                            if(button2.innerText == "X" && button3.innerText == "X" && button1.innerText != "O"){
                                                                button1.innerText = "O"
                                                                console.log("logged button1")
                                                                turn = "player"
                                                                document.getElementById("ansage").innerText = "Your turn"
                                                                return;
                                                            }else{
                                                                if(button4.innerText == "X" && button5.innerText == "X" && button6.innerText != "O"){
                                                                    button6.innerText = "O"
                                                                    console.log("logged button6")
                                                                    turn = "player"
                                                                    document.getElementById("ansage").innerText = "Your turn"
                                                                    return;
                                                                }else{
                                                                    if(button6.innerText == "X" && button5.innerText == "X" && button4.innerText != "O"){
                                                                        button4.innerText = "O"
                                                                        console.log("logged button4")
                                                                        turn = "player"
                                                                        document.getElementById("ansage").innerText = "Your turn"
                                                                        return;
                                                                    }else{
                                                                        if(button7.innerText == "X" && button8.innerText == "X" && button9.innerText != "O"){
                                                                            button9.innerText = "O"
                                                                            console.log("logged button3")
                                                                            turn = "player"
                                                                            document.getElementById("ansage").innerText = "Your turn"
                                                                            return;
                                                                        }else{
                                                                            if(button9.innerText == "X" && button8.innerText == "X" && button7.innerText != "O"){
                                                                                button7.innerText = "O"
                                                                                console.log("logged button7")
                                                                                turn = "player"
                                                                                document.getElementById("ansage").innerText = "Your turn"
                                                                                return;
                                                                            }else{
                                                                                if(button7.innerText == "X" && button9.innerText == "X" && button8.innerText != "O"){
                                                                                    button8.innerText = "O"
                                                                                    console.log("logged button8")
                                                                                    turn = "player"
                                                                                    document.getElementById("ansage").innerText = "Your turn"
                                                                                    return;
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//log buttons
if(button5.innerText == ""){
    button5.innerText = "O"
    console.log("logged button5")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
 }
    
    if(button3.innerText == ""){
    button3.innerText = "O"
    console.log("logged button3")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}
    
    if(button7.innerText == ""){
    button7.innerText = "O"
    console.log("logged button7")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}
    
    if(button9.innerText == ""){
    button9.innerText = "O"
    console.log("logged button9")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}
    
if(button1.innerText == ""){
    button1.innerText = "O"
    console.log("logged button1")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}

if(button2.innerText == ""){
    button2.innerText = "O"
    console.log("logged button2")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}


if(button4.innerText == ""){
    button4.innerText = "O"
    console.log("logged button4")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}

if(button6.innerText == ""){
    button6.innerText = "O"
    console.log("logged button6")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}

if(button8.innerText == ""){
    button8.innerText = "O"
    console.log("logged button8")
    turn = "player"
    document.getElementById("ansage").innerText = "Your turn"
    return;
}


},1500)
