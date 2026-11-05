function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Тактический планшет 1-1-3')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}