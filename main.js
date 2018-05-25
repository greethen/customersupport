"use strict"

// GET DATA from JSON
function getAllCases(){
    //    console.log("https://kea-alt-del.dk/customersupport/"");
        fetch("https://kea-alt-del.dk/customersupport/")
            .then(res=>res.json())
            .then(show)
    
    }
    getAllCases();

    function show(requests){
        console.log(requests)
        let caseTemplate = document.querySelector('.case_template').content;
        requests.forEach(request=>{
            console.log(request)
            let clone = caseTemplate.cloneNode(true);
            if(request.middle){
                //console.log("has middle", request.middle)
                clone.querySelector('.name').textContent=`${request.first} ${request.middle} ${request.last}`;
            } else {
                //console.log("no middle")
                clone.querySelector('.name').textContent=`${request.first} ${request.last}`;
            }
            
            document.querySelector("#cases").appendChild(clone)
        });
    }
    //GRAB ELEMENTS from JSON
    //CLONE
    //PASTE IN TEMPLATE, so it shows


    // let caseTemplate = document.querySelector('.case_template').content;

    // function showCases(first){
    //     console.log(first);
    //     first.forEach(function(){
    //         console.log(first.name);
    //         let clone = caseTemplate.cloneNode(true);
    //         clone.querySelector('first.name').textContent=name;
            
    //     });
    // showCases();
    // }


    //DEFINE THE IMPORTANCE  - SORT with if #<40, then green, if 41<#<70, then yellow, if #>71, then red (with hue)

    //SHOW MORE (modal window with extra information and full message)

    //BUTTON - completed --> remove from DOM with animation