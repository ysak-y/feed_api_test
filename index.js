
google.load("feeds", "1");
function initialize() {
    var feed = new google.feeds.Feed("https://news.google.com/news?output=rss&q=食育");
    feed.setNumEntries(10);
    feed.load(function(result) {
        if (!result.error) {
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                $("#ret").append(
                    $("<div>").append(
                        $("<a>").attr("href", entry.link).text(entry.title))
                );
            }
        }
    });
}

google.setOnLoadCallback(initialize);

