var posts=["2025/05/04/hello-world/","2025/05/09/测试一下本地上传/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };