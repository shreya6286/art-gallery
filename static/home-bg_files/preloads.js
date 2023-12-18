
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.ded91e22e00edce77ce1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/814.latest.en.55752882b6c2ea23a64f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/492.latest.en.7e74adcddb3c2fc17c36.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.en.e29aec87fa53cf70b1bf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.6b28d97df0c6d1e84523.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.en.13d4de92b88330e8fea9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/399.latest.en.24416b6abe81083a2e2b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.en.7fcd45ae446a9a5574e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.latest.en.44376821c5df3ad2607c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/814.latest.en.2713866d0f0fe4bb90dd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.19b4554ccdae68c211c6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/399.latest.en.360e01452b9d835e37d1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.latest.en.ab1e64ace849015a53fb.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0744/9568/8978/files/kennedylogo_x320.jpg?v=1681672227"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  