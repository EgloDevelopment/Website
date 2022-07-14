<?php include("../resources/headers/header.php"); ?>
<body width="device-width">
<div class="position-absolute top-50 start-50 translate-middle">
<h1 class="center">Contact</h1>
<br>
<br>
<iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
<form action="https://backend.eglo.pw/contact/new" method="POST" target="dummyframe">
<input type="email" name="email" class="form-control" placeholder="Email" required>
<br>
<input type="name" name="name" class="form-control" placeholder="Name" required>
<br>
<input type="name" name="issue" class="form-control" placeholder="Describe issue" required>
<br>
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Category</label>
  <select class="form-select" name="category" id="inputGroupSelect01">
    <option selected>Select</option>
    <option value="1">Nymi</option>
    <option value="2">Phonix</option>
    <option value="3">Gamr</option>
    <option value="4">NotyFi</option>
    <option value="5">Trakr</option>
    <option value="6">Soacl</option>
    <option value="7">Other</option>
  </select>
</div>
<div class="center">
<input type="submit" class="btn btn-primary" onclick="redir();">
</div>
</div>
</form>
<script>
  function redir() {
    setTimeout(function(){window.location.href = "../contact/success";}, 1000)
    //window.location.href = "../contact/success";
  }
</script>
</body>
<div style="margin-top: 1000px;">
<?php include("../resources/headers/footer.php"); ?>
</div>