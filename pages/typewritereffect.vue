<template>
<div class="page">
<div class="container">
<SiteHeader></SiteHeader>
</div>
<div class="container">
  <div class="row">
  <div class="col-55">
  <div class="middle-align">
  <h1 class="primary blue bottom-border-black spc-border-bottom">
    KYLE HUFFLING <br>
    WEB DEVELOPER</h1>
  <p class="black spc-border-top">I am a full stack developer with over 5 years of professional experience. 
    I build websites that work for people and businesses. </p>
  </div>
  </div>
    <div class="col-45" style="display: flex;">
      <img style="margin-left: auto;" src='~/assets/images/kylehuffling.png'>
    </div>
  </div>
</div>
<div class="blue-bg box-shadow margin-top">
  <div class="container padding-50">
  <!--<div class="row">
  <div class="col-100">
  <div class="">
  <h2 class="primary white bottom-border-white spc-border-bottom">
    MY SKILLS <br>
    AND EXPERIENCE</h2>
  </div>
  </div>
  </div>-->
  <div class="row row-spc-bottom">
  <div class="col-100">
  <div class="">
  <h2 class="primary white bottom-border-white spc-border-bottom">
    EXAMPLES<br>
    OF MY WORK</h2>
  </div>
  </div>
  </div>
  <div class="row row-spc">
  <div class="col-100">
  <div class="card-wrapper">
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
    <div class="card">
    </div>
  </div>
  </div>
  </div>
  </div>
</div>


<!--Word Processor Effect-->
<style>
#typewriter {
  font-size: 2em;
  margin: 0;
  font-family: "Courier New";
}
#typewriter:after {
  content: "|";
  -webkit-animation: blink 500ms linear infinite alternate;
          animation: blink 500ms linear infinite alternate;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


<pre id="typewriter">
<span class="var-highlight">Kyle Huffling</span>
<span class="string-highlight">Web Developer</span>
<span class="string-highlight">I build websites that work for people and businesses.</span>  
</pre>

<script>

    function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
          tag = "",
          writingTag = false,
          tagOpen = false,
          typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {
        
          if (writingTag === true) {
              tag += HTML[cursorPosition];
          }

          if (HTML[cursorPosition] === "<") {
              tempTypeSpeed = 0;
              if (tagOpen) {
                  tagOpen = false;
                  writingTag = true;
              } else {
                  tag = "";
                  tagOpen = true;
                  writingTag = true;
                  tag += HTML[cursorPosition];
              }
          }
          if (!writingTag && tagOpen) {
              tag.innerHTML += HTML[cursorPosition];
          }
          if (!writingTag && !tagOpen) {
              if (HTML[cursorPosition] === " ") {
                  tempTypeSpeed = 0;
              }
              else {
                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              }
              t.innerHTML += HTML[cursorPosition];
          }
          if (writingTag === true && HTML[cursorPosition] === ">") {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              writingTag = false;
              if (tagOpen) {
                  var newSpan = document.createElement("span");
                  t.appendChild(newSpan);
                  newSpan.innerHTML = tag;
                  tag = newSpan.firstChild;
              }
          }

          cursorPosition += 1;
          if (cursorPosition < HTML.length - 1) {
              setTimeout(type, tempTypeSpeed);
          }

      };

      return {
          type: type
      };
  }

  var typer = document.getElementById('typewriter');

  typewriter = setupTypewriter(typewriter);

  typewriter.type();

</script>
</div>
</template>