function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // The Google Drive folder ID provided
    var folderId = "186S2aOatocyB5U-jnsX9ESWVsH6AzHgN"; 
    var folder = DriveApp.getFolderById(folderId);
    
    var contentType = data.mimeType || "application/octet-stream";
    // The incoming base64 string might have a data URI prefix, if so we should just get the raw base64.
    // Assuming the React frontend sends raw base64 without prefix.
    var blob = Utilities.newBlob(Utilities.base64Decode(data.base64), contentType, data.fileName);
    
    var file = folder.createFile(blob);
    
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "fileUrl": file.getUrl()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error", 
      "message": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
