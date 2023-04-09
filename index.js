
function func(e){
    // e.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const number=document.getElementById("number").value
    const date=document.getElementById("date").value
    const time=document.getElementById("time").value
    const obj={
      naam: name,
      ank: number,
      mail: email
    }
    const objSerialized=JSON.stringify(obj)
    localStorage.setItem(name,objSerialized)
    const divi=document.getElementsByClassName("card border-warning mb-3")
    const form=document.getElementById("form1")
    const para=document.createElement("p")
    para.appendChild(document.createTextNode(name+" - "+email+" - "+number))
    form.appendChild(para)
    // console.log(name)
    // console.log(email)
    // console.log(number)
    // console.log("Booked Appointment for "+date+" at "+time)
  }