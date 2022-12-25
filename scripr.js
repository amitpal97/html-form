// function sendEmail() {

// let UserName=document.querySelector("#userName").value;
// let UserEmail=document.querySelector("#userEmail").value;
// let UserMob=document.querySelector("#userMob").value;
// let UserMess=document.querySelector("#userMess").value;

//     Email.send({
//         Host : "smtp.mailtrap.io",
//         Username : "<Mailtrap username>",
//         Password : "<Mailtrap password>",
//         To : 'recipient@example.com',
//         From : "sender@example.com",
//         Subject : "Test email",
//         // Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert(message)
//     );
//     }

const sheets = SpreadsheetsApp.openByUrl(
  "https://docs.google.com/spreadsheets/d/1BuYVwR8Lkdqbb3XMjSSdzQGsAjMBiKrUN3Oygc9qWUE/edit#gid=0"
);
const sheet =sheets.getsheetByname("sheet1");
function doPost(e){
    let data=e.parameter;
    sheet.appendRow([data.name],[data.email],[data.number],[data.message])
    return ContentService.createTextOutput("success")
}

