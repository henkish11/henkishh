<script>
<!-- code by https://www.html-code-generator.com -->
document.write(unescape('%22use%20strict%22%3B%0Alet%20glowInTexts%20%3D%20document.querySelectorAll%28%22.glowIn%22%29%3B%0AglowInTexts.forEach%28glowInText%20%3D%3E%20%7B%0A%20%20%20%20let%20letters%20%3D%20glowInText.textContent.split%28%22%22%29%3B%0A%20%20%20%20glowInText.textContent%20%3D%20%22%22%3B%0A%20%20%20%20letters.forEach%28%28letter%2C%20i%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20let%20span%20%3D%20document.createElement%28%22span%22%29%3B%0A%20%20%20%20%20%20%20%20span.textContent%20%3D%20letter%3B%0A%20%20%20%20%20%20%20%20span.style.animationDelay%20%3D%20%60%24%7Bi%20*%200.05%7Ds%60%3B%0A%20%20%20%20%20%20%20%20glowInText.append%28span%29%3B%0A%20%20%20%20%7D%29%3B%0A%7D%29%3B%0A'));
</script>
