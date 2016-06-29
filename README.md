# JQuery Downloader
JQuery plugin that allows for downloading files via ajax using blobs.

Supported in IE9+/Edge (4GB limit), and all other major browsers.

## Usage
The parameters for JQuery.download are the same for the [JQuery.ajax(settings)](http://api.jquery.com/jquery.ajax/).  The only difference is the success event.  Your method must return the following:

```javascript
{
  filename: '', /* The name of the file */
  contentType: '' /* The content type of the file (defaults to 'application/octet-stream') */,
  data: '' /* The actual data to return */
}
```

## Example

```javascript
$(function() {
  $.download({
    url: "http://localhost/something-that-generates-a-csv",
    success: function(data) {
      return {
        fileName: "download.csv",
        contentType: "text/csv",
        data: data
      };
    },
    error: function() {
      alert("ERMAGERD!  ERT'S BRERKEN!");
    }
  });
});
```
