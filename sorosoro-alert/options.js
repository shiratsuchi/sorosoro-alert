$(function() {
  $('#save').click(function() {
    chrome.storage.sync.set({
      post_url: $('#post_url').val(),
    }, function() {
      $('#status').text('保存しました');
    });
  });
});
