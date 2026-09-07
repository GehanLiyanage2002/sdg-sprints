function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    var data = JSON.parse(e.postData.contents);
    
    // Setup headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Team Name",
        "Team Leader Email",
        "School / University",
        "Team Leader Name",
        "Team Leader Phone",
        "IEEE Membership",
        "IEEE Number",
        "Problems Selected",
        "Number of Members",
        "Member 2 Name",
        "Member 2 Email",
        "Member 2 Phone",
        "Member 2 IEEE Number",
        "Member 3 Name",
        "Member 3 Email",
        "Member 3 Phone",
        "Member 3 IEEE Number",
        "Member 4 Name",
        "Member 4 Email",
        "Member 4 Phone",
        "Member 4 IEEE Number",
        "Member 5 Name",
        "Member 5 Email",
        "Member 5 Phone",
        "Member 5 IEEE Number",
        "Member 6 Name",
        "Member 6 Email",
        "Member 6 Phone",
        "Member 6 IEEE Number",
        "Agreed Principles",
        "Agreed Code of Conduct",
        "Agreed Commitment"
      ]);
    }

    var row = [
      new Date(),
      data.teamName || "",
      data.teamLeaderEmail || "",
      data.school || "",
      data.teamLeaderName || "",
      data.teamLeaderPhone || "",
      data.ieeeMembership || "",
      data.ieeeMembershipNumber || "N/A",
      (data.problemsSelected || []).join(", "),
      data.numMembers || 1
    ];

    // Parse additional members 2 to 6
    for (var i = 0; i < 5; i++) { 
      if (data.members && i < data.members.length) {
        var m = data.members[i];
        row.push(m.name || "");
        row.push(m.email || "");
        row.push(m.phone || "");
        row.push(m.ieeeNumber || "N/A");
      } else {
        row.push("");
        row.push("");
        row.push("");
        row.push("");
      }
    }

    // Add declarations
    row.push(data.agreePrinciples ? "Yes" : "No");
    row.push(data.agreeCode ? "Yes" : "No");
    row.push(data.agreeCommitment ? "Yes" : "No");
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
