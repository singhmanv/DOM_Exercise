//ex-1
function js_style()
{
    let tag = document.querySelector("p");
    tag.setAttribute("style","font-size:500%;font-family:courier;color:blue")
}

//ex-2
function getFormvalue()
{
    let tags = document.querySelector("form");
    let firstname = tags.children.namedItem("fname").value;
    let lastname = tags.children.namedItem("lname").value;
    console.log(firstname)
    console.log(lastname)
}

function set_background()
{
    let tags = document.getElementsByTagName("p");
    tags[0].style.background = "rgb(255,0,0)";
    tags[1].style.background = "rgb(0,255,0)";
}

function getAttributes()
{
    let tag = document.getElementsByTagName("a");
    console.log("href ------" + tag.href);
    console.log("hreflang---" + tag.hreflang);
    console.log("rel -------" + tag.rel);
    console.log("target ----" + tag.target);
    console.log("type ------" + tag.type);
}

function insert_Row()
{
    let tag = document.querySelector("table");
    let row = tag.insertRow();
    row.insertCell(0).innerHTML = "Row" + tag.rows.length + "cell1"
    row.insertCell(1).innerHTML = "Row" + tag.rows.length + "cell2"

}

function changeContent()
{
    let tag = document.getElementById("myTable");
    let noOfRows = tag.rows.length;
    let noOfCol = tag.rows[0].cells.length;

    let inputrow = parseInt( window.prompt("Enter row number - (0,1,2) "));
    let inputcol = parseInt(window.prompt("Enter column number - (0,1) "));
    let content = "";
    if(!(0 < inputrow && inputrow <= noOfRows) || !(0 < inputcol && inputrow <= noOfCol))
    {
        console.log("Please input valid number.");
        return;
    }
    else
    {
        content = window.prompt("Enter text - ");
    }

    if (content.length)
    tag.rows[inputrow].cells[inputcol].innerHTML = content;
}

function createTable()
{
    let tag = document.querySelector("#myTable");
    for (let i=0; i < 10; i++)
    {
        let row = tag.insertRow();
        row.insertCell(0).innerHTML = " - ";
        row.insertCell(1).innerHTML = " - ";
        row.insertCell(2).innerHTML = " - ";
    }

    let inputrow = window.prompt("Enter row number - ");
    let inputcol = window.prompt("Enter column number - ");
    tag.rows[inputrow].cells[inputcol].innerHTML = "Row-" + inputrow + " col -" + inputcol;

}