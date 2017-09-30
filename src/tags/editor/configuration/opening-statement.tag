<opening-statement>
  <style>
  #openingStatementText{
    white-space: pre-wrap;
  }
  </style>
  <div class="field">
    <label class="label">Opening Statement</label>
    <div class="control">
      <textarea id="openingStatement" class="textarea mathContent" placeholder="a small and brief discussion of the topic being discussed"></textarea>
    </div>
    <br/>
    <div class="control">
    <label>Preview</label>
      <div class="box">
        <p id='openingStatementText'></p>
      </div>
    </div>
  </div>

  <script>
    var that = this

  this.on('mount', function() {
    
    $('#openingStatement').on('input', function(e) {
      var osText = $('#openingStatement').val()
      console.log('osText', osText)
      $('#openingStatementText').html(osText)
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'openingStatementText'])
    });
  })

  </script>
</opening-statement>