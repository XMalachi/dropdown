const {log} = console

// getting the elements from the html to create the function for them
// i also added evvent listener to it, so the element listens for an evvent, this case i used click, so it
// waits for a click
let personalToggler = document.getElementById('personal-toggler').addEventListener('click', personalListToggle)

// after this click this function would be triggered
function personalListToggle(){
    let personalList = document.getElementsByClassName('personal-list')[0]
    let companyList = document.getElementsByClassName('company-list')[0]
    let helpList = document.getElementsByClassName('help-list')[0]

    personalList.classList.toggle('personal-list-toggled')
    companyList.classList.remove('company-list-toggled')
    helpList.classList.remove('help-list-toggled')

    log(personalList)
}


// same thing is done for the company list
let companyToggler = document.getElementById('company-toggler').addEventListener('click', comapanyListToggle)


function comapanyListToggle(){
    let personalList = document.getElementsByClassName('personal-list')[0]
    let companyList = document.getElementsByClassName('company-list')[0]
    let helpList = document.getElementsByClassName('help-list')[0]

    personalList.classList.remove('personal-list-toggled')
    companyList.classList.toggle('company-list-toggled')
    helpList.classList.remove('help-list-toggled')

    log(companyList)

}


// and same thing is done for the help list

let helpToggler = document.getElementById('help-toggler').addEventListener('click', helpListToggle)
log(helpToggler)

function helpListToggle(){
    let personalList = document.getElementsByClassName('personal-list')[0]
    let helpList = document.getElementsByClassName('help-list')[0]
    let companyList = document.getElementsByClassName('company-list')[0]

    personalList.classList.remove('personal-list-toggled')
    companyList.classList.remove('company-list-toggled')
    helpList.classList.toggle('help-list-toggled')

    log(helpList)

}