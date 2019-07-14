function() {
 var jq = jQuery || $;
 jq.download = function(settings) {
  var newSettings = jq.extend(true, {}, settings);
  var oldSuccess = settings.success || function(data) { return { fileName: "download", data: data }; };
  newSettings.success = function() {
    // { fileName: '', contentType: '', data: '' }
    var result = settings.success.apply(this, arguments);

    if (window.navigator.msSaveBlob)
      window.navigator.msSaveBlob(result.data, result.fileName);
    else
    {
      var blob = new Blob([result.data], { type: result.contentType || 'application/octet-stream' });
      var link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      link.href = URL.createObjectURL(blob);
      link.download = result.fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  jq.ajax(newSettings);
 };
}();
