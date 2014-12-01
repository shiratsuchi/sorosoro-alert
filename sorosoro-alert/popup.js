$(function() {
  $('#submit').click(function() {
    chrome.tabs.getSelected(undefined, function(tab){
      var url = tab.url;
      chrome.storage.sync.get('post_url', function(response) {
        var post_url = response['post_url'];
        if (!post_url) {
          alert("拡張設定のオプションから、保存先URLを指定してください。");
        }
        $.post(post_url, {
          url: url
        });
      });
    });
  });
});
