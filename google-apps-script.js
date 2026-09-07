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
        "Member 2 Details",
        "Member 3 Details",
        "Member 4 Details",
        "Member 5 Details",
        "Member 6 Details"
      ]);
    }
    
    // Parse additional members
    var membersData = [];
    for (var i = 0; i < 5; i++) { // Members 2 to 6
      if (i < data.members.length) {
        var m = data.members[i];
        membersData.push(m.name + " | " + m.email + " | " + m.phone + " | IEEE: " + (m.ieeeNumber || 'N/A'));
      } else {
        membersData.push("");
      }
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
      data.numMembers || "",
      membersData[0],
      membersData[1],
      membersData[2],
      membersData[3],
      membersData[4]
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
